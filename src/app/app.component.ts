import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'betrayalapp';
    public layout: string[]; //keeps track of colour locations
    
    constructor(){
        this.layout = [];
    }

    /*
    Retrieves user choices (if avaiable) from localstorage
    */
    ngOnInit() {
        //if there is already some layout items saved then retrieve and display
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

    /*
    Cycles through colours when user clicks a table cell
    */
    private color(event: Event) : void{
        //gets the elementid of the element where the function was called
        let elementId: string = (event.target as Element).id;
        let i = 0;
        let colour = "";

        //if the user clicks the image we need to get the id of the table cell parent
        if (document.getElementById(elementId).tagName == "IMG"){
            event.stopPropagation(); //without this the onclick fires twice
            elementId = document.getElementById(elementId).parentElement.id;
        }

        //rotate the colours
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

        //gets the col number (0-17)
        //since the names only go to 17 for each row need to add # for array format
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
        //saves localstorage item
        localStorage.setItem("betrayalapp", JSON.stringify(this.layout))
    }

    /*
    Set each cell in the table back to default colour
    */
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
        //destroys localstorage item
        localStorage.removeItem("betrayalapp");
    }

    /*
    Set each cell in the table back to default colour
    Cases are hardcoded but can change based on economy/updates
    */
    private suggest() : void{
        for (var t=1; t<18; t++){
            switch(t){
                case 6:
                    document.getElementById("t" + t).style.backgroundColor="red"
                    break;
                case 7:
                case 5:
                case 13:
                    document.getElementById("t" + t).style.backgroundColor="yellow"
                    break;
                case 2:
                case 4:
                    document.getElementById("t" + t).style.backgroundColor="green"
                    break;
            }   
        }
        for (var f=1; f<18; f++){
            switch(f){
                case 6:
                    document.getElementById("f" + f).style.backgroundColor="red"
                    break;
                case 2:
                case 7:
                case 11:
                case 12:
                    document.getElementById("f" + f).style.backgroundColor="yellow"
                    break;
                case 999: //fortification sucks
                    document.getElementById("f" + f).style.backgroundColor="green"
                    break;
            }   
        }
        for (var r=1; r<18; r++){
            switch(r){
                case 6:
                    document.getElementById("r" + r).style.backgroundColor="red"
                    break;
                case 1:
                case 2:
                case 7:
                case 11:
                case 15:
                case 17:
                    document.getElementById("r" + r).style.backgroundColor="yellow"
                    break;
                case 8:
                case 12:
                    document.getElementById("r" + r).style.backgroundColor="green"
                    break;
            }   
        }
        for (var i=1; i<18; i++){
            switch(i){
                case 0: //intervention is ok
                    document.getElementById("i" + i).style.backgroundColor="red"
                    break;
                case 14:
                    document.getElementById("i" + i).style.backgroundColor="yellow"
                    break;
                case 2:
                    document.getElementById("i" + i).style.backgroundColor="green"
                    break;
            }   
        }
        //since a lot of cells changed just loop over the whole table and get the colour
        let x = 0;
        for (var t=1; t<18; t++){
            this.layout[x] = document.getElementById("t" + t).style.backgroundColor;
            x++;
        }
        for (var f=1; f<18; f++){
            this.layout[x] = document.getElementById("f" + f).style.backgroundColor;
            x++;
        }
        for (var r=1; r<18; r++){
            this.layout[x] = document.getElementById("r" + r).style.backgroundColor;
            x++;
        }
        for (var i=1; i<18; i++){
            this.layout[x] = document.getElementById("i" + i).style.backgroundColor;
            x++;
        }
        //save selected colours
        localStorage.setItem("betrayalapp", JSON.stringify(this.layout))
    }


}


 
