import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'betrayalapp';
    public layout: string[];
    
    constructor(){
        this.layout = [];
    }

    ngOnInit() {
        if (localStorage.getItem("betrayalapp") != null){
            this.layout = JSON.parse(localStorage.getItem("betrayalapp"));
            let k = 0;
            for (var i=0; i<4; i++){
                for (var j=1; j<18; j++){
                    if (i == 0){
                        document.getElementById("t" + j).style.backgroundColor = this.layout[k];
                        k++;   
                    }else if (i == 1){
                        document.getElementById("f" + j).style.backgroundColor = this.layout[k];
                        k++;   
                    }else if (i == 2){
                        document.getElementById("r" + j).style.backgroundColor = this.layout[k];
                        k++;      
                    }else if (i == 3){
                        document.getElementById("i" + j).style.backgroundColor = this.layout[k];
                        k++;   
                    }                            
                }
            }
        }
    }

    private color(event: Event) : void{
        let elementId: string = (event.target as Element).id;
        let i = 0;
        let colour = "";

        if (document.getElementById(elementId).style.backgroundColor == "green"){
            colour = "yellow";
            document.getElementById(elementId).style.backgroundColor=colour;
        }
        else if (document.getElementById(elementId).style.backgroundColor == "yellow"){
            colour = "red";
            document.getElementById(elementId).style.backgroundColor=colour;
        }
        else if (document.getElementById(elementId).style.backgroundColor == "red"){
            colour = "green";
            document.getElementById(elementId).style.backgroundColor=colour;
        }
        else{
            colour = "green";
            document.getElementById(elementId).style.backgroundColor=colour;
        }

        let j = elementId.substring(1)
        
        if (elementId.includes("t")){
            i = 0;
            i = parseInt(j) + i;
        }else if (elementId.includes("f")){
            i = 17;
            i = parseInt(j) + i;
        }else if (elementId.includes("r")){
            i = 34;
            i = parseInt(j) + i;
        }else if (elementId.includes("i")){
            i = 51;
            i = parseInt(j) + i;
        }
        this.layout[i-1] = colour;
        localStorage.setItem("betrayalapp", JSON.stringify(this.layout))

    }

    private reset() : void {
        for (var t=1; t<18; t++){
            document.getElementById("t" + t).style.backgroundColor="#252525"
        }
        for (var f=1; f<18; f++){
            document.getElementById("f" + f).style.backgroundColor="#252525"
        }
        for (var r=1; r<18; r++){
            document.getElementById("r" + r).style.backgroundColor="#252525"
        }
        for (var i=1; i<18; i++){
            document.getElementById("i" + i).style.backgroundColor="#252525"
        }

        localStorage.removeItem("betrayalapp");
    }

    private suggest() : void{
        for (var t=1; t<18; t++){
            switch(t){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    document.getElementById("t" + t).style.backgroundColor="red"
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    document.getElementById("t" + t).style.backgroundColor="yellow"
                    break;
                case 14:
                case 15:
                case 16:
                case 17:
                    document.getElementById("t" + t).style.backgroundColor="green"
                    break;
            }   
        }
        for (var f=1; f<18; f++){
            switch(f){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    document.getElementById("f" + f).style.backgroundColor="red"
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    document.getElementById("f" + f).style.backgroundColor="yellow"
                    break;
                case 14:
                case 15:
                case 16:
                case 17:
                    document.getElementById("f" + f).style.backgroundColor="green"
                    break;
            }   
        }
        for (var r=1; r<18; r++){
            switch(r){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    document.getElementById("r" + r).style.backgroundColor="red"
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    document.getElementById("r" + r).style.backgroundColor="yellow"
                    break;
                case 14:
                case 15:
                case 16:
                case 17:
                    document.getElementById("r" + r).style.backgroundColor="green"
                    break;
            }   
        }
        for (var i=1; i<18; i++){
            switch(i){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    document.getElementById("i" + i).style.backgroundColor="red"
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    document.getElementById("i" + i).style.backgroundColor="yellow"
                    break;
                case 14:
                case 15:
                case 16:
                case 17:
                    document.getElementById("i" + i).style.backgroundColor="green"
                    break;
            }   
        }
        let x = 0;
        for (var t=1; t<18; t++){
            this.layout[x] = document.getElementById("t" + t).style.backgroundColor;
            x++;
        }
        for (var f=1; f<18; f++){
            this.layout[x] = document.getElementById("t" + f).style.backgroundColor;
            x++;
        }
        for (var r=1; r<18; r++){
            this.layout[x] = document.getElementById("t" + r).style.backgroundColor;
            x++;
        }
        for (var i=1; i<18; i++){
            this.layout[x] = document.getElementById("t" + i).style.backgroundColor;
            x++;
        }
        localStorage.setItem("betrayalapp", JSON.stringify(this.layout))
    }


}


 
