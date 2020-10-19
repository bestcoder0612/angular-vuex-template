import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { iconsFA } from '../../../../../static-data/icons-fa';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { combineLatest, Observable } from 'rxjs';
import theme from '../../../../../@vex/utils/tailwindcss';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'vex-icons-fa',
  templateUrl: './icons-fa.component.html',
  styleUrls: ['./icons-fa.component.scss'],
  animations: [
    scaleFadeIn400ms
  ]
})
export class IconsFaComponent implements OnInit {

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
      const mapped = Object.keys(iconsFA)
        .filter(key => key.includes((value || '').toLowerCase()))
        .reduce((prev, key) => {
          prev[key] = iconsFA[key];
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
