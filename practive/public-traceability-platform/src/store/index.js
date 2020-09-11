import Vue from 'vue'
import Vuex from 'vuex'
import Getters from './getters'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
const inclube = []
const state = {
  LOADING: false,
  nub: [],
  handerMenu: [{
    name: '首页',
    key: '/homePage'
  }],
  current: 1,
  pagesize: 20,
  handerActive: [],
  proList: [],
  dir: [],
  inclube,
  nextList: [],
  visible: false,
  orderData: {
    list: [],
    total: ''
  },
  Provin: { // 省
    contyList: [],
    cityList: [],
    proList: []
  },
  merchantMsgList: [], // 商户数据
  roleMsgList: [], // 角色数据
  roleTree: [], // 角色树
  userInformation: {}, // 用户数据
  printerList: [], // 云打印机数据
  inquiryData: {}, // 查询数据
  inquiryDataTwo: {
    endDate: '',
    merchantNo: '',
    motorMehicle: '',
    orderNo: '',
    payState: '',
    printState: '',
    productType: '',
    receiverLinker: '',
    receiverMobile: '',
    senderLinker: '',
    senderMobile: '',
    startDate: '',
    timeType: '0',
    waybillNo: ''
  },
  hMenuCurrent: ['/homePage'], // 横栏点击状态
  formInfo: { // 商户表单数据
    cicCustomerList: [],
    exclusiveTemplateList: [],
    ppcPostageList: [],
    printTemplateList: [],
    ppcProductList: []
  },
  merchantsData: {},
  merchantsDataT: {}, // 商户查询条件
  openKeys: [],
  exclusive_mail: [], // 专属寄件模板
  print_template: [], // 打印模板管理
  Message_data: [], // 短信模板数据
  tariffTemplate_data: [] // 资费模板数据
}

export default new Vuex.Store({
  state,
  getters: Getters,
  mutations: Mutations,
  actions: Actions
})