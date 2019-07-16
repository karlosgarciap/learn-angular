import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'https://cdn.browshot.com/static/images/not-found.png'
    }

    if (images.length > 0) {
      return images[0].uri;
    } else {
      return 'https://cdn.browshot.com/static/images/not-found.png'
    }

  }

}
