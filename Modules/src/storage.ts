// If you are exporting only single thing in a module -> default
export default class Store {} // -> This is the default object imported from this module

export enum Format { Files, Storage }

class Compressor {}
class Encryptor {} // Implmentation Details (Should not expose on outside)