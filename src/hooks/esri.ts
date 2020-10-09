import { BASEMAPS } from '@/config/esri.conf';
import { reactive } from 'vue';

const esri = reactive({})

export function useEsriUtils () {
  
  return {
    set (obj : any) {
      Object.assign(esri, { ...obj })
    },
    createBasemap (name: string) {
      const { WebTileLayer } = useEsri()
      const basemap = (BASEMAPS as any)[name]
      if (basemap.type === 'WebTileLayer') {
        return { baseLayers: [ new WebTileLayer({ urlTemplate: basemap.url }) ] }
      }
    },
  }
}


export function useEsri () {
  return ({ ...esri } as any)
}