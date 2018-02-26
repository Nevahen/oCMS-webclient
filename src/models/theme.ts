import { WidgetArea } from "./widgetarea";

export interface Theme{

name:string;
author:string;

//Semantic versioning: Major, Minor, Patch
version:[number, number, number]

allowWidgets:boolean
widgetAreas?:Array<WidgetArea>

}