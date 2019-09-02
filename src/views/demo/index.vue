/**
 * @file index.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2019/8/26
 */
<template>
  <div id="chart-container"></div>
</template>
<script>
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'

export default {
  components: {
    OrganizationChart
  },
  data () {
    return {
      ds: {
        'serviceType': 'nacos',
        'serviceUrl': 'http://localhost:2222',
        'title': 'discovery-gray-group',
        'port': '2222',
        'version': '1.0',
        'children': [
          { 'title': 'discovery-gray-gateway', 'serviceUrl': '192.168.2.2', 'serviceType': 'gateway', 'port': '5001', 'version': '1.0' },
          { 'title': 'discovery-gray-service-a','serviceUrl': '192.168.2.2', 'serviceType': 'service', 'port': '3001,3002', 'version': '1.1,1.0',
            'children': [
              { 'title': 'discovery-gray-service-a', 'serviceUrl': '192.168.2.2', 'serviceType': 'service', 'port': '3002', 'version': '1.1'  },
              { 'title': 'discovery-gray-service-a', 'serviceUrl': '192.168.2.2', 'serviceType': 'service', 'port': '3001', 'version': '1.0'  }
            ]
          },
          { 'title': 'discovery-gray-service-b','serviceUrl': '192.168.2.2', 'serviceType': 'service', 'port': '4001,4002', 'version': '1.1,1.0',
            'children': [
              { 'title': 'discovery-gray-service-b', 'serviceUrl': '192.168.2.2', 'serviceType': 'service', 'port': '4002', 'version': '1.1'  },
              { 'title': 'discovery-gray-service-b', 'serviceUrl': '192.168.2.2', 'serviceType': 'service', 'port': '4001', 'version': '1.0'  }
            ]
          },
          { 'title': 'discovery-gray-zuul', 'serviceUrl': '192.168.2.2', 'serviceType': 'gateway', 'port': '5002', 'version': '1.0' },
        ]
      }
    }
  },
  created () {

  },
  mounted () {
    var nodeTemplate = function(data) {
      return `
        <div class="title">${data.title}</div>
        <div class="content">
          <span>服务类型: ${data.serviceType}</span><br>
          <span>服务地址: ${data.serviceUrl}</span><br>
          <span>服务端口: ${data.port}</span><br>
          <span>服务版本: ${data.version}</span>
        </div>
      `;
    };

    var oc = $('#chart-container').orgchart({
      'data' : this.ds,
      'nodeTemplate': nodeTemplate,
      'toggleSiblingsResp': true
    });
  },
  methods: {

  }
}
</script>
<style>
.orgchart .node .title {
  width: auto !important;
}
.content {
  height: auto !important;
}
#chart-container {
  position: relative;
  display: inline-block;
  top: 10px;
  left: 10px;
  height: 520px;
  width: calc(100% - 24px);
  border: 2px dashed #aaa;
  border-radius: 5px;
  overflow: auto;
  text-align: center;
}
</style>
