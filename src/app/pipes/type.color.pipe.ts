import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTypeColor',
  standalone: true,
})
export class CustomtypeColorPipe implements PipeTransform {
  transform(type: any, ...args: any[]) {
    let color: string;
    switch (type) {
      case 'Feu':
        return 'bg-red-500  text-white'; // Rouge intense
      case 'Eau':
        return 'bg-blue-500  text-white'; // Bleu vif
      case 'Plante':
        return 'bg-green-500 text-white'; // Vert forêt
      case 'Insecte':
        return 'bg-amber-800 text-white'; // Marron insecte
      case 'Normal':
        return 'bg-gray-300 text-gray-800'; // Gris clair
      case 'Vol':
        return 'bg-blue-300 text-gray-800'; // Bleu ciel
      case 'Poison':
        return 'bg-purple-500 text-white'; // Violet toxique
      case 'Fée':
        return 'bg-pink-300 text-gray-800'; // Rose féerique
      case 'Psy':
        return 'bg-purple-800 text-white'; // Violet profond
      case 'Electrik':
        return 'bg-yellow-400 text-gray-800'; // Jaune électrique
      case 'Combat':
        return 'bg-orange-600 text-white'; // Orange combat
      default:
        return 'bg-gray-400 text-gray-800';
    }
    return color;
  }
}
