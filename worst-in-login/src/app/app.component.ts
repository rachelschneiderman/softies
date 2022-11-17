import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'worst-in-login';

  isCountingDown = false;

  seconds = 10;

  loginSuccess = false;

  grossColorFlashSubscription!: Subscription;

  flashRed() {
    console.log('flashing');

    this.isCountingDown = true;

    const stressfulColors = [
      '#bf8c00',
      '#b45f06',
      '#b43d06',
      '#a80707',
      '#990000',
    ];

    this.grossColorFlashSubscription = timer(0, 500).subscribe((value) => {
      const colorIndex = value % 5;

      this.seconds -= 0.5;

      document.body.style.backgroundColor = stressfulColors[colorIndex];
    });
  }

  login() {
    console.log('loggin in');

    const soothingColor = '#6aa84f';

    if (this.grossColorFlashSubscription) {
      this.grossColorFlashSubscription.unsubscribe();
    }

    this.isCountingDown = false;
    this.loginSuccess = true;

    document.body.style.backgroundColor = soothingColor;
  }

  reset() {
    this.seconds = 10;

    this.isCountingDown = false;
    this.loginSuccess = false;

    if (this.grossColorFlashSubscription) {
      this.grossColorFlashSubscription.unsubscribe();
    }

    (document.getElementById('username-input') as any).value = '';
    (document.getElementById('password-input') as any).value = '';

    document.body.style.backgroundColor = '#FFFFFF';
  }
}
