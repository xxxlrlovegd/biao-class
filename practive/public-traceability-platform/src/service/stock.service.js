import Http from '../lib/http'

const APIService = {
  async getMenuTitleData() {
    const res = await Http.get('/bicweb/menu/user')
    return res
  },
  // 获取二维码
  async getQRCodeData() {
    const res = await Http.get('/omsweb/omswaybillprint/qrload')
    return res
  },
  async getDesignAddress() {
    const res = await Http.post('/omsweb/omswaybillprint/getdesignaddress')
    return res
  },
  // 获取订单打印数据
  async getOrderData(params) {
    const res = await Http.post('/omsweb/omswaybillprint/findall', params)
    return res
  },
  // 订单查询
  async orderInquiry(params) {
    const res = await Http.post('/omsweb/omswaybillprint/findorderbyfiled', params)
    return res
  },
  // 获取全部打印的数据
  async getPrintAllOrders(params) {
    const res = await Http.post('/omsweb/omswaybillprint/printallorder', params)
    return res
  },
  // 查询打印订单id
  async getPrintAllOrderIds(params) {
    const res = await Http.post('/omsweb/omswaybillprint/queryprintorderids', params)
    return res
  },
  // 订单打印模板
  async getTemplate() {
    const res = await Http.post('/omsweb/omswaybillprint/findprinttemplateall')
    return res
  },
  // 批量订单打印
  async getBatchPrintData(params) {
    const res = await Http.post('/omsweb/omswaybillprint/findprintordermore', params)
    return res
  },
  // 订单单个打印
  async getOnePrintData(params) {
    const res = await Http.post('/omsweb/omswaybillprint/findprintorder', params)
    return res
  },
  // 单个订单删除
  async orderNoecDeletion(params) {
    const res = await Http.post('/omsweb/omswaybillprint/deletebykey', params)
    return res
  },
  // 订单批量删除
  async orderBatchDeletion(params) {
    const res = await Http.post('/omsweb/omswaybillprint/deleteordermore', params)
    return res
  },
  // 省
  async getQueryall() {
    const res = await Http.post('/omsweb/omswaybillprint/queryprovince')
    return res
  },
  // // //市
  // async getCity (params) {
  //   let res = await Http.post('/test/omsWeb/omswaybillsave/querycity',params)
  //   return res;
  // },
  // //县
  // async getConty (params) {
  //   let res = await Http.post('/test/omsWeb/omswaybillsave/queryconty',params)
  //   return res;
  // },
  // 订单录入
  async postOrderInput(params) {
    const res = await Http.post('/omsweb/omswaybillprint/savewaybill', params)
    return res
  },
  // 修改订单
  async changeOrder(params) {
    const res = await Http.post('/omsweb/omswaybillprint/findwaybillbykey', params)
    return res
  },
  // 保存修改订单
  async preserveOrder(params) {
    const res = await Http.post('/omsweb/omswaybillprint/editwaybill', params)
    return res
  },
  // 快速打印订单
  async quickPrintingOrder(params) {
    const res = await Http.post('/omsweb/omswaybillprint/quickprint', params)
    return res
  },
  // 快速车牌
  async findMotorOrder(params) {
    const res = await Http.post('/omsweb/omswaybillprint/findmotororder', params)
    return res
  },
  // 查询商户
  async queryMerchantList(params) {
    const res = await Http.post('/bicweb/bicmerchant/findallmerchant', params)
    return res
  },
  // 删除商户
  async deleteMerchants(params) {
    const res = await Http.post('/bicweb/bicmerchant/deletemerchant', params)
    return res
  },
  // 商户地址识别
  async MerchantAddresIdentification(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/analyzedetailaddress', params)
    return res
  },
  // 修改商户密码
  async resetMerchantsPwd(params) {
    const res = await Http.post('/bicweb/bicmerchant/resetmerchantpwd', params)
    return res
  },
  // 获取商户表信息
  async getFormInfo() {
    const res = await Http.post('/bicweb/querytemplates/findalltemplate')
    return res
  },
  // 新增商户
  async postAddMerchantApi(params) {
    const res = await Http.post('/bicweb/bicmerchant/savemerchant', params)
    return res
  },
  // 获取修改商户信息
  async getBusinessInfo(params) {
    const res = await Http.post('/bicweb/bicmerchant/updatefindmerchant', params)
    return res
  },
  // 修改商户
  async modifyMerchant(params, config) {
    const res = await Http.post('/bicweb/bicmerchant/updatemerchant', params, config)
    return res
  },
  // 商户详情
  async merchantDetails(params) {
    const res = await Http.post('/bicweb/querytemplates/findmerchantdetails', params)
    return res
  },
  // 获取常用收寄件人
  async getCommonlyUser(params) {
    const res = await Http.get('/bicweb/bicaddressinfo/findaddressinfolist', params)
    return res
  },
  // 获取常用寄件人
  async getCommonlyUserTwo(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/findaddressinfo', params)
    return res
  },
  // 添加常用收件人
  async createAddressInfo(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/createaddressinfo', params)
    return res
  },
  // 添加常用寄件人
  async createAddressSender(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/createaddressinfo', params)
    return res
  },
  // 识别地址
  async distinguishAddres(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/analyzeaddress', params)
    return res
  },
  // 保存专属模板
  async saveMail(params) {
    const res = await Http.post('/bicweb/bicexclusivetemplate/save', params)
    return res
  },
  // 获取专属模板
  async getfindByUser(params) {
    const res = await Http.post('/bicweb/bicexclusivetemplate/findbyorg', params)
    return res
  },
  // 删除专属寄件模板
  async deleteTemplateMail(params) {
    const res = await Http.post('/bicweb/bicexclusivetemplate/delete', params)
    return res
  },
  async editTemplateMail(params) {
    const res = await Http.post('/bicweb/bicexclusivetemplate/find', params)
    return res
  },
  // 专属模板编辑保存
  async updateMail(params) {
    const res = await Http.post('/bicweb/bicexclusivetemplate/update', params)
    return res
  },
  // 获取打印模板
  async getPrintTemplateData(params) {
    const res = await Http.post('/bicweb/bicprinttemplate/findall', params)
    return res
  },
  // 设置默认打印
  async setDefalut(params) {
    const res = await Http.post('/bicweb/bicprinttemplate/default', params)
    return res
  },
  // 获取短信模板数据
  async getShortMessage() {
    const res = await Http.post('/bicweb/bicmessagetemplate/findall')
    return res
  },
  // 设置短信模板
  async setShortMessage(params) {
    const res = await Http.post('/bicweb/bicmessagetemplate/updatestatus', params)
    return res
  },
  // 获取资费模板
  async getTariffTemplate(params) {
    const res = await Http.post('/bicweb/ppcpostage/findbyorg', params)
    return res
  },
  // 删除资费模板
  async deleteTariffMail(params) {
    const res = await Http.post('/bicweb/ppcpostage/delete', params)
    return res
  },
  // 查询资费模板详情
  async findViewDetails(params) {
    const res = await Http.post('/bicweb/ppcpostage/find', params)
    return res
  },
  // 创建资费模板
  async savePpcPostage(params) {
    const res = await Http.post('/bicweb/ppcpostage/save', params)
    return res
  },
  // 首次查询退款申请列表
  async queryDrawbackApplyFirst(params) {
    const res = await Http.post('/omsweb/omsapproveforrefund/findapprovebyapproval', params)
    return res
  },
  // 查询退款申请列表
  async queryDrawbackApplyList(params) {
    const res = await Http.post('/omsweb/omsapplyforrefund/findapplyrefundbyapply', params)
    return res
  },
  // 查询退款记录详情
  async queryDrawbackApplyViewDetail(params) {
    const res = await Http.post('/omsweb/omsapplyforrefund/findorderbyid', params)
    return res
  },
  // 添加退款申请
  async addDrawbackApply(params) {
    const res = await Http.post('/omsweb/omsapplyforrefund/addapplyapproval', params)
    return res
  },
  // 取消退款申请
  async cancelDrawbackApply(params) {
    const res = await Http.post('/omsweb/omsapplyforrefund/delapplyapproval', params)
    return res
  },
  // 根据运单号查询退款申请
  async queryDrawbackApplyByWaybillNo(params) {
    const res = await Http.post('/omsweb/omsapplyforrefund/findapplybyid', params)
    return res
  },
  // 首次查询退款审批列表
  async queryDrawbackAuthFirst(params) {
    const res = await Http.post('/omsweb/omsapproveforrefund/findapprovebyapproval', params)
    return res
  },
  // 根据条件查询退款审批列表
  async queryDrawbackAuthList(params) {
    const res = await Http.post('/omsweb/omsapproveforrefund/findapplybypage', params)
    return res
  },
  // 查询退款记录详情
  async queryDrawbackAuthViewDetail(params) {
    const res = await Http.post('/omsweb/omsapproveforrefund/findapproverefundbyid', params)
    return res
  },
  // 审批退款
  async executeDrawbackAuth(params) {
    const res = await Http.post('/omsweb/omsapproveforrefund/updateapplyapproval', params)
    return res
  },
  // 客户管理
  async queryCurstomerList(params) {
    const res = await Http.post('/bicweb/biccustomer/findallcustomer', params)
    return res
  },
  // 常用寄件人查询列表
  async queryicAddressList(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/findaddressinfobypage', params)
    return res
  },
  // 设置默认收寄件人
  async setupDefaultContacts(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/setupdefaultcontacts', params)
    return res
  },
  // 删除常用寄件人
  async deleteAddressInfo(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/deleteaddressinfo/batch', params)
    return res
  },
  // 更新收寄件人
  async updateAddressInfo(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/updateaddressinfo', params)
    return res
  },
  // 添加收寄件人
  async getAddressDetail(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/detail', params)
    return res
  },
  // 查询角色
  async queryRolesList(params) {
    const res = await Http.post('/bicweb/bicroleauth/rolelist', params)
    return res
  },
  // 新增商户
  async postAddRoleApi(params) {
    const res = await Http.post('/bicweb/bicroleauth/addrole', params)
    return res
  },
  // 修改用户
  async postUpdataRoleApi(params) {
    const res = await Http.post('/bicweb/bicroleauth/updaterole', params)
    return res
  },
  // 删除用户
  async postDeleteRoleApi(params) {
    const res = await Http.post('/bicweb/bicroleauth/deleterole', params)
    return res
  },
  // 获取角色树
  async fetchRoleTree(params) {
    const res = await Http.get('/bicweb/menu/tree', params)
    return res
  },
  // 获取已选角色树
  async fetchRoleChecked(params) {
    const res = await Http.post('/bicweb/menu/selectids', params)
    return res
  },
  // 角色授权
  async roleAuthApi(params) {
    const res = await Http.post('/bicweb/bicroleauth/roleauth', params)
    return res
  },
  // 获取机构树
  async fetchOrgTree(params) {
    const res = await Http.post('/bicweb/bicorg/orglist', params)
    return res
  },
  // 获取已关联得用户
  async fetchLinkedUsers(params) {
    const res = await Http.post('/bicweb/bicorg/linkedusers', params)
    return res
  },
  // 获取已选择的机构
  async fetchLinkedOrgs(params) {
    const res = await Http.post('/bicweb/bicorg/linkedorgs', params)
    return res
  },
  // 获取机构下用户
  async fetchOrgUser(params) {
    const res = await Http.post('/bicweb/bicorg/userlist', params)
    return res
  },
  // 关联用户
  async linkUserApi(params) {
    const res = await Http.post('/bicweb/bicroleauth/linkuser', params)
    return res
  },
  // 接口接入模块
  // 申请开发者模块
  async queryDeveloperInfo(params) {
    const res = await Http.post('/bicweb/bicdeveloperinfo/finddeveloperinfobyid ', params)
    return res
  },
  async applyForDeveloper(params) {
    const res = await Http.post('/bicweb/bicdeveloperinfo/insertdeveloperinfo', params)
    return res
  },
  async modifyDeveloperInfo(params) {
    const res = await Http.post('/bicweb/bicdeveloperinfo/updatedeveloperinfo', params)
    return res
  },
  // 查询是否是开发者
  async queryDeveloperByUser(params) {
    const res = await Http.post('/bicweb/bicdeveloperinfo/finddeveloperinfobyid', params)
    return res
  },
  // API接口申请模块
  async queryAPIById(params) {
    const res = await Http.post('/bicweb/bicinterfaceapply/queryapibyid', params)
    return res
  },
  async updateAPIById(params) {
    const res = await Http.post('/bicweb/bicinterfaceapply/updateapibyid', params)
    return res
  },
  async deleteAPIById(params) {
    const res = await Http.post('/bicweb/bicinterfaceapply/deleteapibyid', params)
    return res
  },
  async insertAPIById(params) {
    const res = await Http.post('/bicweb/bicinterfaceapply/insertapibynameandid', params)
    return res
  },
  // 生产经营日报表
  async queryDailyOrder(params) {
    const res = await Http.post('/omsweb/omsorderdaily/queryorderdailybywaybill', params)
    return res
  },
  async queryDailyInfoByMerchantNo(params) {
    const res = await Http.post('/omsweb/omsorderdaily/querypostdailyinfo', params)
    return res
  },
  // 交易查询
  async transactionQuery(params) {
    const res = await Http.post('/omsweb/trxrecord/query', params)
    return res
  },
  // 注销用户登录
  async loginout() {
    const res = await Http.get('/loginweb/user/logout')
    return res
  },
  // 寄达范围配置查询
  async deliveryDistrictQuery(params) {
    const res = await Http.post('/bicweb/deliverydistrict/template/list', params)
    return res
  },
  // 寄达范围配置详情
  async deliveryDistrictDetail(params) {
    const res = await Http.post('/bicweb/deliverydistrict/template/detail/list/page', params)
    return res
  },
  // 寄达范围配置详情
  async deliveryDistrictChange(params) {
    const res = await Http.post('/bicweb/deliverydistrict/template/detail/list/page', params)
    return res
  },
  // 寄达范围配置更新
  async deliveryDistrictUpdate(params) {
    const res = await Http.post('/bicweb/deliverydistrict/template/detail/updatestatus', params)
    return res
  },
  // 获取title名称
  async getTitle(params) {
    const res = await Http.get('/bicweb/health/title', params)
    return res
  },
  // 获取机构商户列表
  async fetchorgmerchant(params) {
    const res = await Http.get('/omsweb/omswaybillprint/fetchorgmerchant', params)
    return res
  },
  // 查询云打印机列表
  async queryPrinterList(params) {
    const res = await Http.post('/omsweb/cloudprint/getprinterlist', params)
    return res
  },
  // 新增打印机
  async postAddPrinterApi(params) {
    const res = await Http.post('/omsweb/cloudprint/addprinter', params)
    return res
  },
  // 修改云打印机
  async postUpdataPrinterApi(params) {
    const res = await Http.post('/omsweb/cloudprint/updateprinter', params)
    return res
  },
  // 删除云打印机
  async postDeletePrinterApi(params) {
    const res = await Http.post('/omsweb/cloudprint/deleteprinter', params)
    return res
  },
  // 获取已和打印机关联的用户
  async userLinkedPrinters(params) {
    const res = await Http.post('/omsweb/cloudprint/linkedusers', params)
    return res
  },
  // 打印机关联用户
  async linkUser(params) {
    const res = await Http.post('/omsweb/cloudprint/linkuser', params)
    return res
  },
  // 获取用户设置的默认云打印机
  async getDefaultCloudPrinter() {
    const res = await Http.post('/omsweb/cloudprint/getdefaultprinter')
    return res
  },
  // 获取所有已和用户绑定的云打印机
  async getAllLinkedPrinters() {
    const res = await Http.post('/omsweb/cloudprint/getalllinkedprinters')
    return res
  },
  // 云打印
  async unlimitedPrint(params) {
    const res = await Http.post('/omsweb/cloudprint/unlimitedprint', params)
    return res
  },
  // 根据条件查询订单核对列表
  async queryOrderVerifyList(params) {
    const res = await Http.post('/omsweb/omsordercheckresult/verifylist', params)
    return res
  },
  // 获取商户设置小程序默认寄件人
  async getMiniAddressInfoId(params) {
    const res = await Http.get('/bicweb/bicaddressinfo/getminiaddressinfoid', params)
    return res
  },
  // 设置小程序下单默认寄件人
  async setMiniAddressInfoId(params) {
    const res = await Http.post('/bicweb/bicaddressinfo/setminiaddressinfoid', params)
    return res
  },
  // 添加网点
  async addDots(params) {
    const res = await Http.post('/bicweb/dot/createdot', params)
    return res
  },
  // 查询网点
  async queDots(params) {
    const res = await Http.post('/bicweb/dot/findall', params)
    return res
  },
  // 编辑网点
  async editDots(params) {
    const res = await Http.post('/bicweb/dot/updatedot', params)
    return res
  },
  // 删除网点
  async deleteDots(params) {
    const res = await Http.post('/bicweb/dot/deletedot', params)
    return res
  },
  //机构业务统计
  async getMyStatistics(params) {
    const res = await Http.post('/omsweb/orgstatistics/getmystatistics', params)
    return res
  },
  //获取机构网点业务统计
  async getMyDotStatistics(params) {
    const res = await Http.post('/omsweb/orgstatistics/getmydotstatistics', params)
    return res
  },
}
export default APIService