import { Injectable, Input } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateMessageService } from '../variables-management/translate-message.service';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  @Input() myFunction;

  public loading;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private translate: TranslateMessageService,
    private alertController: AlertController
  ) { }

  public async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Aguarde'
    });
    await this.loading.present();
  }

  public async presentToast(message: string, durationNew?: number) {
    let durationFinal = 5000;
    if(durationNew){
      durationFinal = durationNew;
    }
    const toast = await this.toastController.create({
      message,
      duration: durationFinal
    });
    toast.present();
  }

  public async presentErrorToast(error: string, durationNew?: number) {
    let durationFinal = 5000;
    if(durationNew){
      durationFinal = durationNew;
    }
    const message = this.translate.callVerifyErrors(error);
    const toast = await this.toastController.create({
      message,
      duration: durationFinal
    });
    toast.present();
  }

}
