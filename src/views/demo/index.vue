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
          { 'name': 'Su Miao', 'title': 'department manager', 'office': '北戴河',
            'children': [
              { 'name': 'Tie Hua', 'title': 'senior engineer', 'office': '北戴河' },
              { 'name': 'Hei Hei', 'title': 'senior engineer', 'office': '北戴河' }
            ]
          },
          { 'name': 'Yu Jie', 'title': 'department manager', 'office': '长春' },
          { 'name': 'Yu Li', 'title': 'department manager', 'office': '长春' },
          { 'name': 'Hong Miao', 'title': 'department manager', 'office': '长春' },
          { 'name': 'Yu Wei', 'title': 'department manager', 'office': '长春' },
          { 'name': 'Chun Miao', 'title': 'department manager', 'office': '长春' },
          { 'name': 'Yu Tie', 'title': 'department manager', 'office': '长春' }
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
      'nodeTemplate': nodeTemplate
    });
  },
  methods: {

  }
}
</script>
<style>
.orgchart .node {
  width: auto !important;
}
.content {
  height: auto !important;
}
</style>
