/**
 * @file index.vue
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 2019/8/26
 */
<template>
  <div>
    <organization-chart :datasource="ds"></organization-chart>
  </div>
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
        'id': '1',
        'name': 'discovery-gray-group',
        'title': 'Nacos',
        'children': [
          { 'id': '2', 'name': 'Bo Miao', 'title': 'department managerdfsdfsadfafwasjdajsdf kjsdkjfwpijf' },
          { 'id': '3', 'name': 'Su Miao', 'title': 'department manager',
            'children': [
              { 'id': '4', 'name': 'Tie Hua', 'title': 'senior engineer' },
              { 'id': '5', 'name': 'Hei Hei', 'title': 'senior engineer',
                'children': [
                  { 'id': '6', 'name': 'Pang Pang', 'title': 'engineer' },
                  { 'id': '7', 'name': 'Xiang Xiang', 'title': 'UE engineer' }
                ]
              }
            ]
          },
          { 'id': '8', 'name': 'Hong Miao', 'title': 'department manager' },
          { 'id': '9', 'name': 'Chun Miao', 'title': 'department manager' }
        ]
      }
    }
  }
}
</script>
<style>

</style>
