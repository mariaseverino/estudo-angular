import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [ErrorDialogComponent, CategoryPipe],
  exports: [ErrorDialogComponent, MatIconModule, CategoryPipe],
})
export class SharedModule {}
