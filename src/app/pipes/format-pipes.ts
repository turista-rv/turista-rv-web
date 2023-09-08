import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfMask',
})
export class CpfMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length === 11) {
      return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
    }
    return value;
  }
}

@Pipe({
  name: 'passportMask',
})
export class PassportMaskPipe implements PipeTransform {
  transform(value: string): string {
    // Implemente a lógica da máscara para passaporte aqui
    // Por exemplo: return `${value.substring(0, 3)}-${value.substring(3, 6)}`;
    return value;
  }
}


@NgModule({
  declarations: [CpfMaskPipe, PassportMaskPipe], // Adicione todos os pipes aqui
  exports: [CpfMaskPipe, PassportMaskPipe], // Exporte todos os pipes para uso em outros módulos
})
export class FormatPipesModule {}
