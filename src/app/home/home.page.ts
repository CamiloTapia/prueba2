import { Component } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bluetoothList: any = []
  selectedPrinter: any

  constructor(private printService: PrintService) { }

  listPrinter() {
    this.printService.searchBluetoothPrinter().then(resp => { this.bluetoothList = resp })
  }

  selectPrinter(macAddress: any) {
    this.selectPrinter = macAddress
  }

  printStuff() {
    //The text that you want to print
    var myText = "Hello hello hello \n\n\n This is a test \n\n\n";
    this.printService.sendToBluetoothPrinter(this.selectedPrinter, myText);
  }

}
