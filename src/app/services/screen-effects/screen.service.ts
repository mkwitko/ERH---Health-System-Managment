import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  public loading;

  public async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Aguarde'
    });
    await this.loading.present();
  }

  public async presentToast(message: string, durationNew?: number) {
    var durationFinal = 5000;
    if(durationNew){
      durationFinal = durationNew;
    }
    const toast = await this.toastController.create({
      message,
      duration: durationFinal
    });
    toast.present();
  }
}
