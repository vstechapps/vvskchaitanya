import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.less'
})
export class CertificateComponent {
  http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);

  studentName: string = 'V. Sai Likhith';
  courseName: string = 'Python Fullstack Internship';
  institutionName: string = 'Keystone Edu Tech Private LTD';
  associationName: string = 'CoC (Care of Careers)';
  logoUrl: string = '/assets/images/keystone-logo.jpg';
  signatureUrl: string = '/assets/images/vvsk-sign.png';
  trainerName: string = 'V.V.S.K Chaitanya';
  designations: string = 'Fullstack Trainer\nLead Software Engineer';

  isGenerating = false;
  previewHtmlContent: SafeResourceUrl | null = null;

  async getCompiledHtml(): Promise<string | null> {
    if (!this.studentName || !this.courseName) {
      alert("Please enter Student Name and Course Name.");
      return null;
    }

    try {
      const templateHtml = await firstValueFrom(
        this.http.get('assets/certificate-template.html', { responseType: 'text' })
      );

      if (!templateHtml) return null;

      const splitDesignations = this.designations.split('\n').filter(d => d.trim() !== '');
      const designationsHtml = splitDesignations.map(d => `<div>${d}</div>`).join('');

      const signatureHtml = this.signatureUrl
        ? `<img src="${this.signatureUrl}" class="signature-image" alt="Signature">`
        : '';

      return templateHtml
        .replace('{{studentName}}', this.studentName)
        .replace('{{courseName}}', this.courseName)
        .replace('{{institutionName}}', this.institutionName)
        .replace('{{associationName}}', this.associationName)
        .replace('{{logoUrl}}', this.logoUrl)
        .replace('{{trainerName}}', this.trainerName)
        .replace('{{designationsHtml}}', designationsHtml)
        .replace('{{signatureHtml}}', signatureHtml);
    } catch (e) {
      console.error('Error fetching template', e);
      alert("Failed to fetch template.");
      return null;
    }
  }

  async previewCertificate() {
    this.previewHtmlContent = null; // reset
    let finalHtml = await this.getCompiledHtml();
    if (finalHtml) {
      // Inject base tag so relative routes load from the current app origin instead of data: origin
      const baseTag = `<base href="${window.location.origin}">`;
      if (finalHtml.includes('<head>')) {
        finalHtml = finalHtml.replace('<head>', `<head>${baseTag}`);
      }
      
      this.previewHtmlContent = this.sanitizer.bypassSecurityTrustResourceUrl(
        'data:text/html;charset=utf-8,' + encodeURIComponent(finalHtml)
      );
    }
  }

  async generatePDF() {
    const finalHtml = await this.getCompiledHtml();
    if (!finalHtml) return;

    this.isGenerating = true;

    try {
      const container = document.createElement('div');
      container.innerHTML = finalHtml;

      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      document.body.appendChild(container);

      const opt = {
        margin: 0,
        filename: `${this.studentName.replace(/\s+/g, '_')}_Certificate.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'px', format: [1123, 794], orientation: 'landscape' }
      };

      const element = container.querySelector('.certificate-container');
      const h2p = typeof html2pdf === 'function' ? html2pdf : (html2pdf as any).default;

      if (typeof h2p === 'function') {
        await h2p().from(element).set(opt).save();
      } else {
        console.error("html2pdf is not a function", html2pdf);
      }

      document.body.removeChild(container);
    } catch (e) {
      console.error('Error generating PDF', e);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      this.isGenerating = false;
    }
  }
}
