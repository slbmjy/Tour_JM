var APP_DATA = {
  "scenes": [
    {
      "id": "0-digital-scholarship-lab-i",
      "name": "Digital Scholarship Lab (I)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.191040663032182,
          "pitch": 0.029848716368034545,
          "rotation": 4.71238898038469,
          "target": "2-project-room-ii"
        },
        {
          "yaw": -0.5390863373181993,
          "pitch": 0.08427844666193174,
          "rotation": 0,
          "target": "1-digital-scholarship-lab-ii"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6623561164246308,
          "pitch": -0.05624399115907508,
          "title": "This is the title",
          "text": "This is the text"
        }
      ]
    },
    {
      "id": "1-digital-scholarship-lab-ii",
      "name": "Digital Scholarship Lab (II)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.063286707139749,
          "pitch": 0.07720729749595456,
          "rotation": 0,
          "target": "0-digital-scholarship-lab-i"
        },
        {
          "yaw": 2.7735915655829437,
          "pitch": 0.038872258835201734,
          "rotation": 4.71238898038469,
          "target": "2-project-room-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-project-room-ii",
      "name": "Project Room (II)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4859389570972361,
          "pitch": 0.042239375320352934,
          "rotation": 0,
          "target": "1-digital-scholarship-lab-ii"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
