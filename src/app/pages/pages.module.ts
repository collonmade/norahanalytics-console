import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {GameOverviewModule} from './game-overview/game-overview.module';
import { ChurnPredictionsComponent } from './churn-predictions/churn-predictions.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ChartModule} from "angular2-chartjs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {NgxEchartsModule} from "ngx-echarts";
import {ChartsRoutingModule} from "./charts/charts-routing.module";
import {SwitcherComponent} from "./charts/chart-switcher/switcher/switcher.component";

const PAGES_COMPONENTS = [
  PagesComponent,
  SwitcherComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    GameOverviewModule,
    ChartsRoutingModule, NgxEchartsModule, NgxChartsModule, ChartModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ChurnPredictionsComponent,
  ],
})
export class PagesModule {
}
