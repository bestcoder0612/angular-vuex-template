import { Component, OnInit } from '@angular/core';
import { Icon } from '@visurel/iconify-angular';
import { trackById } from '../../../../../@vex/utils/track-by';
import icDescription from '@iconify/icons-ic/twotone-description';
import icMovieFilter from '@iconify/icons-ic/twotone-movie-filter';
import { MatDialog } from '@angular/material/dialog';
import { HelpCenterGuidesGuideComponent } from './help-center-guides-guide/help-center-guides-guide.component';

export enum GuideCategory {
  firstSteps,
  accountSettings,
  apiHelp,
  billing,
}

export interface Guide {
  id: number;
  label: string;
  icon: Icon;
  category: GuideCategory;
  onClick: (guide: Guide) => void;
}

@Component({
  selector: 'vex-help-center-guides',
  templateUrl: './help-center-guides.component.html',
  styleUrls: ['./help-center-guides.component.scss']
})
export class HelpCenterGuidesComponent implements OnInit {

  guides: Guide[] = [
    {
      id: 1,
      label: 'How secure is my password?',
      icon: icDescription,
      category: GuideCategory.accountSettings,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 2,
      label: 'Can I change my username?',
      icon: icDescription,
      category: GuideCategory.accountSettings,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 3,
      label: 'How do I change my email?',
      icon: icMovieFilter,
      category: GuideCategory.accountSettings,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 4,
      label: 'Where can I change my timezone?',
      icon: icDescription,
      category: GuideCategory.accountSettings,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 5,
      label: 'How do I change my password?',
      icon: icMovieFilter,
      category: GuideCategory.accountSettings,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 6,
      label: 'Which technologies are used?',
      icon: icDescription,
      category: GuideCategory.apiHelp,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 7,
      label: 'How do I make a request?',
      icon: icMovieFilter,
      category: GuideCategory.apiHelp,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 8,
      label: 'What are the API Limits?',
      icon: icDescription,
      category: GuideCategory.apiHelp,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 9,
      label: 'How can I apply for the API?',
      icon: icMovieFilter,
      category: GuideCategory.apiHelp,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 10,
      label: 'When can I start developing?',
      icon: icDescription,
      category: GuideCategory.apiHelp,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 11,
      label: 'Can I get a refund?',
      icon: icDescription,
      category: GuideCategory.billing,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 12,
      label: 'How do I pay?',
      icon: icMovieFilter,
      category: GuideCategory.billing,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 13,
      label: 'Which payment methods are supported?',
      icon: icMovieFilter,
      category: GuideCategory.billing,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 14,
      label: 'Do I need to pay VAT?',
      icon: icDescription,
      category: GuideCategory.billing,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 15,
      label: 'Where do I find my purchase code?',
      icon: icDescription,
      category: GuideCategory.billing,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 16,
      label: 'How do I download the template?',
      icon: icDescription,
      category: GuideCategory.firstSteps,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 17,
      label: 'Installation Guide',
      icon: icMovieFilter,
      category: GuideCategory.firstSteps,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 18,
      label: 'Creating your first page',
      icon: icMovieFilter,
      category: GuideCategory.firstSteps,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 19,
      label: 'Customizing your template',
      icon: icDescription,
      category: GuideCategory.firstSteps,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 20,
      label: 'How do I contact support?',
      icon: icDescription,
      category: GuideCategory.firstSteps,
      onClick: guide => this.openDialog(guide)
    }
  ];

  accountSettings = this.guides.filter(guide => guide.category === GuideCategory.accountSettings);
  apiHelp = this.guides.filter(guide => guide.category === GuideCategory.apiHelp);
  billing = this.guides.filter(guide => guide.category === GuideCategory.billing);
  firstSteps = this.guides.filter(guide => guide.category === GuideCategory.firstSteps);


  trackById = trackById;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(guide: Guide) {
    this.dialog.open(HelpCenterGuidesGuideComponent, {
      data: guide,
      width: '600px'
    });
  }
}
