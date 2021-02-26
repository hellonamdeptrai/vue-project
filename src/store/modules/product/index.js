export default {
    namespaced: true,
    state: {
        tableData: [{
            id: 1,
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            id: 2,
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            id: 3,
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            id: 4,
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
    },
    getters: {
        //
    },
    mutations: {
        deleteProduct (state,index) {
            // let data = JSON.parse(JSON.stringify(state.tableData))
            state.tableData.splice(index, 1)
            // state.tableData = data
            // console.log(id)
          },
    }
}