import { ChangeDetectorRef, Directive, HostBinding, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Directive({
  selector: '[vexContainer]'
})
export class ContainerDirective implements OnDestroy {

  @HostBinding('class.container') enabled: boolean;

  constructor(private configService: ConfigService,
              private cd: ChangeDetectorRef) {
    this.configService.config$.pipe(
      map(config => config.boxed),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe(boxed => {
      this.enabled = boxed;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {}
}
