import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: 'star-rate',
    templateUrl: './star-rate.component.html',
    styleUrls: ['./star-rate.component.css']
})
export class StarRateComponent implements OnChanges {
    @Input() rating: number;
    allStarsWidth:number;
    starWidth: number = 70;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void {
        this.allStarsWidth = this.rating * this.starWidth/5;
        console.log(this.allStarsWidth);
    }

    onClick(): void {
        this.ratingClicked.emit(`El puntaje ${this.rating} fue clickeado!`);
    }
}