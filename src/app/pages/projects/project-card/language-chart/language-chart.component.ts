// typescript
import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-language-chart',
  templateUrl: './language-chart.component.html',
  standalone: true,
  styleUrls: ['./language-chart.component.css']
})
export class LanguageChartComponent implements OnChanges, AfterViewInit {
  @Input()
  languages: { name: string; color: string }[] = [];

  @ViewChild('chartCanvas', { static: false })
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart: Chart | null = null;
  private needsRender = false;

  ngAfterViewInit() {
    if (this.languages.length || this.needsRender) {
      this.renderChart();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['languages']) {
      if (!this.chartCanvas || !this.chartCanvas.nativeElement) {
        this.needsRender = true;
        return;
      }
      this.renderChart();
    }
  }

  renderChart() {
    const canvas = this.chartCanvas?.nativeElement;
    if (!canvas) return;

    const percentages = this.languages.map(() => Math.floor(Math.random() * 100));

    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      // type: 'polarArea',
      type: 'pie',
      data: {
        labels: this.languages.map(lang => lang.name),
        datasets: [{
          data: percentages,
          backgroundColor: this.languages.map(lang => lang.color),
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' },
        },
      },
    });
  }
}
