// src/app/pipes/truncate-pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  // Shortens long test values
  transform(value: string, limit: number = 30): string {

    if (!value) {
      return '';
    }

    // Return truncated text if it exceeds the limit
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
