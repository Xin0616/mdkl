<template>
  <div style="height: 1000px;">
    <l-map
      style="height: 100%; width: 100%; z-index: 1"
      :zoom="zoom"
      :min-zoom="3"
      :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" @click="zoomToMarker">
        <l-popup :content="text"></l-popup>
        <l-tooltip :options="{ permanent: true, interactive: true, direction: 'center' }">
          <div @click="innerClick">
            美国国防部
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';

import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet"
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: '',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 3,
    center: [47.413220, -1.219482],
    markerLatLng: [47.313220, -1.319482],
    bounds: null,
    text: '<div>\n' +
      '            <p>aa</p>\n' +
      '            <p>aa</p>\n' +
      '          </div>',
  }),
  computed: {

  },
  methods: {
    zoomToMarker: function(obj) {
      console.log(obj)
    },
    innerClick() {
      alert("Click!");
    },

  }
}
</script>
