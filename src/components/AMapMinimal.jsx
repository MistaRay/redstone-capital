import { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

const AMAP_KEY = '1738f8d0d4397a2aa843d474a884ad9b';
const MAP_CONTAINER_ID = 'amap-container-unique';

export default function AMapMinimal({ longitude, latitude }) {
  useEffect(() => {
    let mapInstance, marker, infoWindow;

    // 1) Remove any old map container if it exists
    const old = document.getElementById(MAP_CONTAINER_ID);
    if (old) old.remove();

    // 2) Create a new <div> with the unique ID
    const container = document.createElement('div');
    container.id = MAP_CONTAINER_ID;
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.minHeight = '200px';
    const parent = document.getElementById('amap-parent');
    if (parent) parent.appendChild(container);

    // 3) Delay map‐creation by a tiny amount so parent's CSS has "kicked in"
    setTimeout(() => {
      AMapLoader.load({
        key: AMAP_KEY,
        version: '2.0',
        plugins: [], // no extra plugins needed for a simple map + marker
      })
        .then((AMap) => {
          // 4) Create the map centered on the props
          mapInstance = new AMap.Map(MAP_CONTAINER_ID, {
            zoom: 16,
            center: [longitude, latitude],
            viewMode: '2D',
          });

          // 5) Add a marker
          marker = new AMap.Marker({
            position: [longitude, latitude],
            title: 'Redstone Houfeng',
            map: mapInstance,
          });

          // 6) Add an InfoWindow
          const infoContent = `
            红石厚峰<br/>
            中山南路505弄19号楼一幢一层101、二层201<br/>
            黄浦区，上海
          `;
          infoWindow = new AMap.InfoWindow({
            content: infoContent,
            offset: new AMap.Pixel(0, -30),
            anchor: 'bottom-center',
          });
          infoWindow.open(mapInstance, marker.getPosition());
          marker.on('click', () => {
            infoWindow.open(mapInstance, marker.getPosition());
          });
        })
        .catch((err) => {
          console.error('AMapLoader 出错:', err);
        });
    }, 50);

    // 7) Clean up on unmount
    return () => {
      if (mapInstance) mapInstance.destroy();
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [longitude, latitude]);

  // This <div> is the "parent" that we attach the real map-container to
  return (
    <div
      id="amap-parent"
      style={{
        width: '100%',
        height: '100%',
        minHeight: 200,
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    />
  );
} 