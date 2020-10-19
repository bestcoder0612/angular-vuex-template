import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { first, map } from 'rxjs/operators';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../../services/layout.service';
import icCheck from '@iconify/icons-ic/twotone-check';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Style, StyleService } from '../../services/style.service';
import { ConfigName } from '../../interfaces/config-name.model';

@Component({
  selector: 'vex-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent implements OnInit {

  configs = this.configService.configs;

  config$ = this.configService.config$;
  activeConfig$ = this.configService.config$.pipe(
    map(config => Object.keys(this.configService.configs).find(key => this.configService.configs[key] === config))
  );

  isRTL$ = this.route.queryParamMap.pipe(
    map(paramMap => coerceBooleanProperty(paramMap.get('rtl'))),
    first()
  );

  icSettings = icSettings;
  icCheck = icCheck;
  ConfigName = ConfigName;
  Style = Style;

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private layoutService: LayoutService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  setConfig(layout: ConfigName, style: Style) {
    this.configService.setConfig(layout);
    this.styleService.setStyle(style);
  }

  sidenavOpenChange(change: MatSlideToggleChange) {
    change.checked ? this.layoutService.openSidenav() : this.layoutService.closeSidenav();
  }

  layoutRTLChange(change: MatSlideToggleChange) {
    change.checked ? this.layoutService.enableRTL() : this.layoutService.disableRTL();
  }

  toolbarPositionChange(change: MatRadioChange) {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }

  footerVisibleChange(change: MatSlideToggleChange) {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }

  footerPositionChange(change: MatRadioChange) {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }


  /*
  sidenavCollapsedChange(change: MatCheckboxChange) {
    this.layoutService.setCollapsed(change.checked);
  }

  toolbarVisibleChange(change: MatSlideToggleChange) {
    this.configService.setToolbarVisible(change.checked);
  }

  toolbarPositionChange(change: MatRadioChange) {
    this.configService.setToolbarPosition(change.value);
  }

  footerPositionChange(change: MatRadioChange) {
    this.configService.setFooterPosition(change.value);
  }
  */

}
