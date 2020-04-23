import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.css']
})
export class ProductCreateFormComponent implements OnInit {
  pageTitle = "Create Product";

  constructor(private gtmService: GoogleTagManagerService) {
    
  }

  ngOnInit() {
  }

  createProduct(): void {

    // push GTM with a custom event
    const gtmTag = {
      event: 'gtm.click',
      data: 'create-product-button-click',
    };
    this.gtmService.pushTag(gtmTag);
  }

}
