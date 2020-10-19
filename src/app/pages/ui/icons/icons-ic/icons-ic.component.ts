import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { combineLatest, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import theme from '../../../../../@vex/utils/tailwindcss';
import { iconsIC } from '../../../../../static-data/icons-ic';

@Component({
  selector: 'vex-icons-ic',
  templateUrl: './icons-ic.component.html',
  styleUrls: ['./icons-ic.component.scss'],
  animations: [
    scaleFadeIn400ms
  ]
})
export class IconsIcComponent implements OnInit {

  filteredIcons$: Observable<any[]> = combineLatest([
    this.route.queryParamMap.pipe(
      map(paramMap => paramMap.get('search')),
      startWith('')
    ),
    this.breakpointObserver.observe(`(min-width: ${theme.screens.sm})`).pipe(
      map(state => state.matches)
    )
  ]).pipe(
    map(([value, isDesktop]: [string, boolean]) => {
      const mapped = Object.keys(iconsIC)
        .filter(key => key.includes((value || '').toLowerCase()))
        .reduce((prev, key) => {
          prev[key] = iconsIC[key];
          return prev;
        }, {});

      return Object.keys(mapped).reduce((prev, curr, index) => {
        if (isDesktop) {
          if (index % 4 === 0) {
            prev.push({});
          }
        } else {
          if (index % 2 === 0) {
            prev.push({});
          }
        }

        prev[prev.length - 1] = {
          ...prev[prev.length - 1],
          [curr]: mapped[curr]
        };
        return prev;
      }, [{}]);
    })
  );

  constructor(private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
