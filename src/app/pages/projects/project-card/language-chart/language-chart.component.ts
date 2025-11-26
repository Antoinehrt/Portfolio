import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
    selector: 'app-language-chart',
    templateUrl: './language-chart.component.html',
    standalone: true,
    imports: [NgForOf, NgIf],
    styleUrls: ['./language-chart.component.css']
})
export class LanguageChartComponent implements OnChanges, AfterViewInit {
    @Input()
    languages: { name: string; color: string }[] = [];

    @ViewChild('chartCanvas', {static: false})
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
            type: 'doughnut',
            data: {
                labels: this.languages.map(lang => lang.name),
                datasets: [{
                    data: percentages,
                    backgroundColor: this.languages.map(lang => lang.color),
                    borderWidth: 2,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    hoverBorderWidth: 3,
                    hoverBorderColor: 'rgba(255, 255, 255, 0.3)'
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '50%',
                plugins: {
                    legend: {
                        display: false // On va créer une légende custom
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: 'var(--main-color)',
                        borderWidth: 1
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 800
                },
                elements: {
                    arc: {
                        borderRadius: 4
                    }
                }
            },
        });
    }
}
