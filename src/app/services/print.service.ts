import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { Plugin } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private btSerial:BluetoothSerial) { }

  searchBluetoothPrinter(){
    return  this.btSerial.list()
  }

  connectToBluetoothPrinter(macAddress:string){
    return this.btSerial.connect(macAddress)
  }

  disconnectBluetoothPrinter(){
    return this.btSerial.disconnect();
  }

  sendToBluetoothPrinter(macAddress:string,dataString:string){
    this.connectToBluetoothPrinter(macAddress).subscribe(() => {
      this.btSerial.write(dataString).then(() => {
        console.log('Todo bien');

        this.disconnectBluetoothPrinter()
      }, err => {
      console.log({then:err});
      })
    }, err => {
      console.log({suscribe:err});
    })

  }
}
