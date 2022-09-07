export const coordinatesRegex: RegExp = /^-?\d+\.?(\d+)?,-?\d+\.?(\d+)?$/
export const imagesRegex: RegExp = /^https?:\/\/\w+\.\w+\S+(\w\.png|\w\.jpg|\w\.gif|\w\.svg)$/
export enum AdultSizeEnum {
  none,
  small,
  medium,
  large,
}
export enum UserLevelEnum {
  none,
  center,
  adopter,
}
export enum MedicalStateEnum {
  none,
  pending,
  done,
}
export enum Order {
  asc = 'asc',
  desc = 'desc',
}
