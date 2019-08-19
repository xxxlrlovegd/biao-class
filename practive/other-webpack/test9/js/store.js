const storeObject = {
    state: {
        selectionData: [
            { label: '下载介质', value: 'download', comp: 'download-medium' },
            { label: '修改文件', value: 'modifyfile', comp: 'edit-file' },
            { label: '执行工具', value: 'exec', comp: 'perform-tools' },
            { label: '执行命令', value: 'script', comp: 'perform-command' },
            { label: '替换文件', value: 'alter', comp: 'alternate-file' },
            { label: '删除文件', value: 'deletefile', comp: 'delete-file' },
            { label: '创建文件', value: 'createfile', comp: 'creat-file' },
            { label: '执行SQL', value: 'sql', comp: 'perform-sql' },
            { label: '备份文件', value: 'backup', comp: 'backup-file' },
        ],
        allActionRes: new Object(),
        updateFun: new Object(),
        validateFun: new Object(),
        emptyFlag: {},
    },
    getters: {},
    mutations: {
        saveActionRes(state, obj) {
            let group = obj.group;
            group = obj.group == undefined ? 'group0' : obj.group;
            if (!state.allActionRes.hasOwnProperty(group)) {
                state.allActionRes[group] = new Array();
            }
            let flag = state.allActionRes[group].some(item => {
                if (item.step == obj.newValue.step) return true;
            })
            if (!flag) {
                state.allActionRes[group].push(obj.newValue);
            }
        },
        getActionRes(state, obj) {
            let group = obj.group;
            group = obj.group == undefined ? 'group0' : obj.group;
            Vue.set(state.allActionRes, group, obj.data);
        },
        updateValue(state, obj) {
            let group = obj.group;
            group = obj.group == undefined ? 'group0' : obj.group;
            state.updateFun[group][obj.index]();
        },
        setUpdateFun(state, group) {
            group = group == undefined || group == '' ? 'group0' : group;
            Vue.set(state.updateFun, group, new Array);
        },
        setValiateFun(state, group) {
            group = group == undefined || group == '' ? 'group0' : group;
            Vue.set(state.validateFun, group, new Array);
        },
        validate(state, group) {
            let flagSelect = false;
            let flagInput = false;
            group = group == undefined ? 'group0' : group;
            state.allActionRes[group].forEach((item, index) => {
                if (state.validateFun[group][index].select && state.validateFun[group][index].select()) {
                    flagSelect = true;
                } else if (state.validateFun[group][index].input && state.validateFun[group][index].input()) {
                    flagInput = true;
                }
            });
            state.emptyFlag[group] = { flagSelect: flagSelect, flagInput: flagInput };
        }
    },
    actions: {}
}
const store = window.store = new Vuex.Store({
    state: storeObject.state,
    getters: storeObject.getters,
    mutations: storeObject.mutations,
    actions: storeObject.actions,
});
export { store };