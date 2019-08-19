// 步1下载介质
let downloadHaul = {
    name: 'download-haul',
    template: `
       <div class="as-action-component">
             <row>
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入需要下载的文件名称" v-model="dmsourceCatalogValue" @on-change="dmOnChange" :class="{'as-action-error':isEmpty1}" style="position: relative;"></i-input>
                <Icon type="ios-compose-outline" @click="valueChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
                <i-col :md="2" :xs="2"><span>保存至</span></i-col>
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入保存文件的绝对路径" v-model="dmTargetCatalogValue" @on-change="dmOnChange" :class="{'as-action-error':isEmpty2}"></i-input>
                <Icon type="ios-compose-outline" @click="valueChange1" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
             </row>
             <Modal v-model="valueUpdate" width="60%" :mask-closable="false" :styles="{top: '174px'}">
                <div slot="header" style='font-size: .9rem;'>
                    <strong>编辑下载文件</strong>
                </div>
                <i-input :readonly="status" placeholder="请输入需要下载的文件名称" v-model="inputValue"  :class="{'as-action-error':isEmpty3}"></i-input>
                <div slot="footer">
                        <i-button :disabled="status" type="primary" size="small" @click="SaveVaule">保存</i-button>
                        <i-button  type="ghost" size="small" @click="CancelValue">取消</i-button>
                </div>
            </Modal>
            <Modal v-model="valueUpdate1" width="60%" :mask-closable="false" :styles="{top: '174px'}">
            <div slot="header" style='font-size: .9rem;'>
                <strong>编辑保存文件</strong>
            </div>
            <i-input :readonly="status" placeholder="请输入保存文件的绝对路径" v-model="inputValue1"  :class="{'as-action-error':isEmpty4}"></i-input>
            <div slot="footer">
                    <i-button :disabled="status" type="primary" size="small" @click="SaveVaule1">保存</i-button>
                    <i-button  type="ghost" size="small" @click="CancelValue1">取消</i-button>
            </div>
        </Modal>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            dmTargetCatalogValue: '',
            dmsourceCatalogValue: '',
            isEmpty1: false,
            isEmpty2: false,
            isEmpty3: false,
            isEmpty4: false,
            status: false,
            valueUpdate: false,
            inputValue: '',
            valueUpdate1: false,
            inputValue1: ''
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        valueChange() {
            if (this.dmsourceCatalogValue == '' || this.dmsourceCatalogValue == undefined) {
                this.dmsourceCatalogValue = ''
            }
            this.isEmpty3 = false;
            this.valueUpdate = true;
            this.inputValue = this.dmsourceCatalogValue;
        },
        SaveVaule() {
            if (this.inputValue) {
                this.dmsourceCatalogValue = this.inputValue
                this.isEmpty1 = false
            } else {
                this.isEmpty1 = false;
                if (this.dmsourceCatalogValue == '' || this.dmsourceCatalogValue == undefined)
                    this.isEmpty1 = true;
                this.isEmpty3 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate = false
        },
        CancelValue() {
            this.valueUpdate = false;
            if (this.dmsourceCatalogValue == '' || this.dmsourceCatalogValue == undefined) {
                this.dmsourceCatalogValue = ''
            }
        },
        valueChange1() {
            if (this.dmTargetCatalogValue == '' || this.dmTargetCatalogValue == undefined) {
                this.dmTargetCatalogValue = ''
            }
            this.isEmpty4 = false;
            this.valueUpdate1 = true;
            this.inputValue1 = this.dmTargetCatalogValue;
        },
        SaveVaule1() {
            if (this.inputValue1) {
                this.dmTargetCatalogValue = this.inputValue1
                this.isEmpty2 = false
            } else {
                this.isEmpty2 = false;
                if (this.dmTargetCatalogValue == '' || this.dmTargetCatalogValue == undefined)
                    this.isEmpty2 = true;
                this.isEmpty4 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate1 = false
        },
        CancelValue1() {
            this.valueUpdate1 = false;
            if (this.dmTargetCatalogValue == '' || this.dmTargetCatalogValue == undefined) {
                this.dmTargetCatalogValue = ''
            }
        },
        dmOnChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.fileaddress = this.dmsourceCatalogValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.targetdir = this.dmTargetCatalogValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.dmsourceCatalogValue = this.$store.state.allActionRes[this.group][this.indexing].action.fileaddress;
                this.dmTargetCatalogValue = this.$store.state.allActionRes[this.group][this.indexing].action.targetdir;
            } else {
                this.dmsourceCatalogValue = '';
                this.dmTargetCatalogValue = '';
            }
        },
        validateValue() {
            if (this.dmsourceCatalogValue == '' || this.dmsourceCatalogValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.dmTargetCatalogValue == '' || this.dmTargetCatalogValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    },

};
//步2执行命令
let execHaul = {
    name: 'exec-haul',
    template: `
        <div class="as-action-component">
            <row> 
            <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入Linux命令" v-model="ecsourceCatalogValue" @on-change="ecOnChange" :class="{'as-action-error':isEmpty1}"></i-input>
            <Icon type="ios-compose-outline" @click="valueChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
            </i-col>
            <i-col :md="2" :xs="2"><span>参数</span></i-col>
            <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入参数" v-model="ecTargetCatalogValue" @on-change="ecOnChange"></i-input></i-col>
         </row>
         <Modal v-model="valueUpdate" width="60%" :mask-closable="false" :styles="{top: '174px'}">
            <div slot="header" style='font-size: .9rem;'>
                <strong>编辑Linux命令</strong>
            </div>
            <i-input :readonly="status" placeholder="请输入Linux命令" v-model="inputValue"  :class="{'as-action-error':isEmpty2}"></i-input>
            <div slot="footer">
                    <i-button :disabled="status" type="primary" size="small" @click="SaveVaule">保存</i-button>
                    <i-button  type="ghost" size="small" @click="CancelValue">取消</i-button>
            </div>
        </Modal>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            ecsourceCatalogValue: '',
            ecTargetCatalogValue: '',
            isEmpty1: false,
            isEmpty2: false,
            status: false,
            valueUpdate: false,
            inputValue: ''

        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        valueChange() {
            if (this.ecsourceCatalogValue == '' || this.ecsourceCatalogValue == undefined) {
                this.ecsourceCatalogValue = ''
            }
            this.isEmpty2 = false;
            this.valueUpdate = true;
            this.inputValue = this.ecsourceCatalogValue;
        },
        SaveVaule() {
            if (this.inputValue) {
                this.ecsourceCatalogValue = this.inputValue
                this.isEmpty1 = false
            } else {
                this.isEmpty1 = false
                if (this.ecsourceCatalogValue == '' || this.ecsourceCatalogValue == undefined)
                    this.isEmpty1 = true;
                this.isEmpty2 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate = false
        },
        CancelValue() {
            this.valueUpdate = false;
            if (this.ecsourceCatalogValue == '' || this.ecsourceCatalogValue == undefined) {
                this.ecsourceCatalogValue = ''
            }
        },
        ecOnChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.cmd = this.ecsourceCatalogValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.param = this.ecTargetCatalogValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.ecsourceCatalogValue = this.$store.state.allActionRes[this.group][this.indexing].action.cmd;
                this.ecTargetCatalogValue = this.$store.state.allActionRes[this.group][this.indexing].action.param;
            } else {
                this.ecsourceCatalogValue = '';
                this.ecTargetCatalogValue = '';
            }
        },
        validateValue() {
            if (this.ecsourceCatalogValue == '' || this.ecsourceCatalogValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            return this.isEmpty1;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
// 步3修改文件
let modifyfile1Haul = {
    name: 'modifyfile1-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入目标文件" v-model="mfTargetFileValue" @on-change="mfChange" :class="{'as-action-error':isEmpty1}"></i-input></i-col>
                <i-col :md="2" :xs="2"><span>修改</span></i-col>
                <i-col :md="11" :xs="8"><i-input :readonly="status" type="textarea" :rows="2"  placeholder="请输入修改文件的内容" v-model="mfEditedFileValue" @on-change="mfChange" :class="{'as-action-error':isEmpty2}"></i-input></i-col>
             </row>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            mfTargetFileValue: '',
            mfEditedFileValue: '',
            isEmpty1: false,
            isEmpty2: false,
            status: false,
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        mfChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.filename = this.mfTargetFileValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.filecontent = this.mfEditedFileValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.mfTargetFileValue = this.$store.state.allActionRes[this.group][this.indexing].action.filename;
                this.mfEditedFileValue = this.$store.state.allActionRes[this.group][this.indexing].action.filecontent;
            } else {
                this.mfTargetFileValue = '';
                this.mfEditedFileValue = '';
            }
        },
        validateValue() {
            if (this.mfTargetFileValue == '' || this.mfTargetFileValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.mfEditedFileValue == '' || this.mfEditedFileValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
// 步4执行脚本
let scriptHaul = {
    name: 'script-haul',
    template: `
        <div class="as-action-component">
            <row>
                <i-col :md="24" :xs="18"><i-input :readonly="status" type="textarea" :autosize="{minRows: 1,maxRows: 1}"  placeholder="请输入shell脚本内容" v-model="sesourceCatalogValue" @on-change="seOnChange" :class="{'as-action-error':isEmpty1}" style="position: relative;"></i-input>
                <Icon type="ios-compose-outline" @click="textChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
            </row>
            <Modal v-model="textUpdate" width="60%" :mask-closable="false">
            <div slot="header">
                 编辑文件内容
            </div>
            <as-codemirror :readonly="control" :value.sync="creatValue" :height="550" :lineNumbers="true"></as-codemirror>
            <div slot="footer">
                    <i-button :disabled="status" type="primary" size="small" @click="SaveAuto">保存</i-button>
                    <i-button  type="ghost" size="small" @click="CancelAuto">取消</i-button>
            </div>
        </Modal>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            sesourceCatalogValue: '',
            isEmpty1: false,
            status: false,
            textUpdate: false,
            creatValue: '',
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        textChange() {
            if (this.sesourceCatalogValue == '' || this.sesourceCatalogValue == undefined) {
                this.sesourceCatalogValue = ''
            }
            this.textUpdate = true;
            this.creatValue = this.sesourceCatalogValue;
        },
        SaveAuto() {
            if (this.creatValue) {
                this.sesourceCatalogValue = this.creatValue
                this.isEmpty1 = false;
            } else {
                this.isEmpty1 = false
                if (this.sesourceCatalogValue == '' || this.sesourceCatalogValue == undefined)
                    this.isEmpty1 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.textUpdate = false
        },
        CancelAuto() {
            this.textUpdate = false;
            if (this.sesourceCatalogValue == '' || this.sesourceCatalogValue == undefined) {
                this.sesourceCatalogValue = ''
            }
        },
        seOnChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.content = this.sesourceCatalogValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.sesourceCatalogValue = this.$store.state.allActionRes[this.group][this.indexing].action.content;
            } else {
                this.sesourceCatalogValue = '';
            }
        },
        validateValue() {
            if (this.sesourceCatalogValue == '' || this.sesourceCatalogValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            return this.isEmpty1
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
// 步5删除文件
let deletefileHaul = {
    name: 'deletefile-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="24" :xs="18"><i-input :readonly="status" type="text" placeholder="请输入要删除文件的绝对路径，例如：/tmp/xxx.txt" v-model="dfChoiseDeleteFileValue" @on-change="dfChange" :class="{'as-action-error':isEmpty1}"></i-input></i-col>
              </row>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            dfChoiseDeleteFileValue: '',
            isEmpty1: false,
            status: false,
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        dfChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.filename = this.dfChoiseDeleteFileValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.dfChoiseDeleteFileValue = this.$store.state.allActionRes[this.group][this.indexing].action.filename;
            } else {
                this.dfChoiseDeleteFileValue = '';
            }
        },
        validateValue() {
            if (this.dfChoiseDeleteFileValue == '' || this.dfChoiseDeleteFileValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            return this.isEmpty1;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
//步6创建文件
let createnfileHaul = {
    name: 'createnfile-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入文件名称，例如:/tmp/auto.txt" v-model="cfFileNameValue" @on-change="cfChange" :class="{'as-action-error':isEmpty1}"></i-input></i-col>
                <i-col :md="2" :xs="2"><span>创建</span></i-col>
                <i-col :md="11" :xs="8"><i-input :readonly="status" type="textarea" :autosize="{minRows: 1,maxRows: 1}"  placeholder="请输入文件内容" v-model="cfFileContentValue" @on-change="cfChange" :class="{'as-action-error':isEmpty2}"></i-input></i-col>
             </row>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            cfFileNameValue: '',
            cfFileContentValue: '',
            cfResData: {},
            isEmpty1: false,
            isEmpty2: false,
            status: false,
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        cfChange() {
            this.setValue();
            this.validateValue();
        },
        setCfResData() {
            this.cfResData.value1 = this.dfChoiseDeleteFileValue;
            this.cfResData.value2 = this.cfFileContentValue;
            this.cfResData.label = '编辑';
            this.cfResData.result = this.cfResData.value1 + this.cfResData.label + this.cfResData.value2;
            this.$emit('cf-change', this.cfResData);
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.filename = this.cfFileNameValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.filecontent = this.cfFileContentValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.cfFileNameValue = this.$store.state.allActionRes[this.group][this.indexing].action.filename;
                this.cfFileContentValue = this.$store.state.allActionRes[this.group][this.indexing].action.filecontent;
            } else {
                this.cfFileNameValue = '';
                this.cfFileContentValue = '';
            }
        },
        validateValue() {
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};

let createfileHaul = {
    name: 'createfile-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入文件名称，例如:/tmp/auto.txt" v-model="cfFileNameValue" @on-change="cfChange" :class="{'as-action-error':isEmpty1}"></i-input>
                <Icon type="ios-compose-outline" @click="valueChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
                <i-col :md="2" :xs="2"><span>内容</span></i-col>
                <i-col :md="11" :xs="8"><i-input :readonly="status" type="textarea" :autosize="{minRows: 1,maxRows: 1}"  placeholder="请输入文件内容" v-model="cfFileContentValue" @on-change="cfChange" :class="{'as-action-error':isEmpty2}" style="position: relative;">
               </i-input>
               <Icon type="ios-compose-outline" @click="textChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col> 
             </row>
             <Modal v-model="valueUpdate" width="60%" :mask-closable="false" :styles="{top: '174px'}">
             <div slot="header" style='font-size: .9rem;'>
                 <strong>编辑文件名称</strong>
             </div>
             <i-input :readonly="status" placeholder="请输入文件名称，例如:/tmp/auto.txt" v-model="inputValue"  :class="{'as-action-error':isEmpty3}"></i-input>
             <div slot="footer">
                     <i-button :disabled="status" type="primary" size="small" @click="SaveVaule">保存</i-button>
                     <i-button  type="ghost" size="small" @click="CancelValue">取消</i-button>
             </div>
         </Modal>
             <Modal v-model="textUpdate" width="60%" :mask-closable="false">
                <div slot="header">
                     编辑文件内容
                </div>
                <as-codemirror :readonly="control" :value.sync="creatValue" :height="550" :lineNumbers="true"></as-codemirror>
                <div slot="footer">
                        <i-button :disabled="status" type="primary" size="small" @click="SaveAuto">保存</i-button>
                        <i-button  type="ghost" size="small" @click="CancelAuto">取消</i-button>
                </div>
            </Modal>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            cfFileNameValue: '',
            cfFileContentValue: '',
            cfResData: {},
            isEmpty1: false,
            isEmpty2: false,
            isEmpty3: false,
            textUpdate: false,
            creatValue: '',
            status: false,
            valueUpdate: false,
            inputValue: ''
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        valueChange() {
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.cfFileNameValue = ''
            }
            this.isEmpty3 = false;
            this.valueUpdate = true;
            this.inputValue = this.cfFileNameValue;
        },
        SaveVaule() {
            if (this.inputValue) {
                this.cfFileNameValue = this.inputValue
                this.isEmpty1 = false;
            } else {
                this.isEmpty1 = false;
                if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined)
                    this.isEmpty1 = true;
                this.isEmpty3 = true
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate = false
        },
        CancelValue() {
            this.valueUpdate = false;
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.cfFileNameValue = ''
            }
        },
        textChange() {
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.cfFileContentValue = ''
            }
            this.isEmpty2 = false
            this.textUpdate = true;
            this.creatValue = this.cfFileContentValue;
        },
        SaveAuto() {
            if (this.creatValue) {
                this.cfFileContentValue = this.creatValue
                this.isEmpty2 = false
            } else {
                this.isEmpty2 = false
                if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined)
                    this.isEmpty2 = true
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.textUpdate = false
        },
        CancelAuto() {
            this.textUpdate = false;
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.cfFileContentValue = ''
            }
        },
        cfChange() {
            this.setValue();
            this.validateValue();
        },
        setCfResData() {
            this.cfResData.value1 = this.dfChoiseDeleteFileValue;
            this.cfResData.value2 = this.cfFileContentValue;
            this.cfResData.label = '编辑';
            this.cfResData.result = this.cfResData.value1 + this.cfResData.label + this.cfResData.value2;
            this.$emit('cf-change', this.cfResData);
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.filename = this.cfFileNameValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.filecontent = this.cfFileContentValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.cfFileNameValue = this.$store.state.allActionRes[this.group][this.indexing].action.filename;
                this.cfFileContentValue = this.$store.state.allActionRes[this.group][this.indexing].action.filecontent;
            } else {
                this.cfFileNameValue = '';
                this.cfFileContentValue = '';
            }
        },
        validateValue() {
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
//步7执行Sql
let oracleHaul = {
    name: 'oracle-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="24" :xs="18"><i-input :readonly="status" type="textarea" placeholder="请输入SQL内容" :autosize="{minRows: 1,maxRows: 1}"  v-model="psSqlValue" @on-change="psChange" :class="{'as-action-error':isEmpty1}" style="position: relative;"></i-input>
                <Icon type="ios-compose-outline" @click="textChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
                </row>
             <Modal v-model="textUpdate" width="60%" :mask-closable="false">
             <div slot="header">
                  编辑SQL内容
             </div>
             <as-codemirror :readonly="control" :value.sync="creatValue" :height="550" :lineNumbers="true"></as-codemirror>
             <div slot="footer">
                     <i-button :disabled="status" type="primary" size="small" @click="SaveAuto">保存</i-button>
                     <i-button  type="ghost" size="small" @click="CancelAuto">取消</i-button>
             </div>
         </Modal>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            psSqlValue: '',
            psResData: {},
            isEmpty1: false,
            status: false,
            creatValue: '',
            textUpdate: false,
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        textChange() {
            if (this.psSqlValue == '' || this.psSqlValue == undefined) {
                this.psSqlValue = ''
            }
            this.textUpdate = true;
            this.creatValue = this.psSqlValue;
        },
        SaveAuto() {
            if (this.creatValue) {
                this.psSqlValue = this.creatValue
                this.isEmpty1 = false
            } else {
                this.isEmpty1 = false
                if (this.psSqlValue == '' || this.psSqlValue == undefined)
                    this.isEmpty1 = true
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.textUpdate = false
        },
        CancelAuto() {
            this.textUpdate = false;
            if (this.psSqlValue == '' || this.psSqlValue == undefined) {
                this.psSqlValue = ''
            }
        },
        psChange() {
            this.setPsResData();
            this.setValue();
            this.validateValue();
        },
        setPsResData() {
            this.psResData.value1 = this.psSqlValue;
            this.psResData.value2 = '';
            this.psResData.label = '';
            this.psResData.result = this.psResData.value1 + this.psResData.label + this.psResData.value2;
            this.$emit('ps-change', this.psResData);
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.sql = this.psSqlValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.psSqlValue = this.$store.state.allActionRes[this.group][this.indexing].action.sql;
            } else {
                this.psSqlValue = '';
            }
        },
        validateValue() {
            if (this.psSqlValue == '' || this.psSqlValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            return this.isEmpty1
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
// 步8备份
let backupHaul = {
    name: 'backup-haul',
    template: `
    <div class="as-action-component">
         <row> 
            <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入需要备份的文件或目录，例如/tmp/auto/auto.txt" v-model="bfChoiseFileValue" @on-change="bfChange" :class="{'as-action-error':isEmpty1}"></i-input>
            <Icon type="ios-compose-outline" @click="valueChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
            </i-col>
            <i-col :md="2"  :xs="2"><span>备份至</span></i-col>
            <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请选择目标地址，例如/tmp/auto/auto.txt.bak" v-model="bfTargetlogValue" @on-change="bfChange" :class="{'as-action-error':isEmpty2}"></i-input>
            <Icon type="ios-compose-outline" @click="valueChange1" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
            </i-col>
         </row>
         <Modal v-model="valueUpdate" width="60%" :mask-closable="false" :styles="{top: '174px'}">
            <div slot="header" style='font-size: .9rem;'>
                <strong>编辑备份文件</strong>
            </div>
            <i-input :readonly="status" placeholder="请输入需要备份的文件或目录，例如/tmp/auto/auto.txt" v-model="inputValue"  :class="{'as-action-error':isEmpty3}"></i-input>
            <div slot="footer">
                    <i-button :disabled="status" type="primary" size="small" @click="SaveVaule">保存</i-button>
                    <i-button  type="ghost" size="small" @click="CancelValue">取消</i-button>
            </div>
         </Modal>
        <Modal v-model="valueUpdate1" width="60%" :mask-closable="false" :styles="{top: '174px'}">
            <div slot="header" style='font-size: .9rem;'>
                <strong>编辑目标地址</strong>
            </div>
            <i-input :readonly="status" placeholder="请选择目标地址，例如/tmp/auto/auto.txt.bak" v-model="inputValue1"  :class="{'as-action-error':isEmpty4}"></i-input>
            <div slot="footer">
                    <i-button :disabled="status" type="primary" size="small" @click="SaveVaule1">保存</i-button>
                    <i-button  type="ghost" size="small" @click="CancelValue1">取消</i-button>
            </div>
        </Modal>
    </div>
`,
    data() {
        return {
            bfChoiseFileValue: '',
            bfTargetlogValue: '',
            isEmpty1: false,
            isEmpty2: false,
            isEmpty3: false,
            isEmpty4: false,
            status: false,
            valueUpdate: false,
            inputValue: '',
            valueUpdate1: false,
            inputValue1: ''
        }
    },
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        valueChange() {
            if (this.bfChoiseFileValue == '' || this.bfChoiseFileValue == undefined) {
                this.bfChoiseFileValue = ''
            }
            this.isEmpty3 = false;
            this.valueUpdate = true;
            this.inputValue = this.bfChoiseFileValue;
        },
        SaveVaule() {
            if (this.inputValue) {
                this.bfChoiseFileValue = this.inputValue
                this.isEmpty1 = false
            } else {
                this.isEmpty1 = false
                if (this.bfChoiseFileValue == '' || this.bfChoiseFileValue == undefined)
                    this.isEmpty1 = true;
                this.isEmpty3 = true
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate = false
        },
        CancelValue() {
            this.valueUpdate = false;
            if (this.bfChoiseFileValue == '' || this.bfChoiseFileValue == undefined) {
                this.bfChoiseFileValue = ''
            }
        },
        valueChange1() {
            if (this.bfTargetlogValue == '' || this.bfTargetlogValue == undefined) {
                this.bfTargetlogValue = ''
            }
            this.isEmpty4 = false;
            this.valueUpdate1 = true;
            this.inputValue1 = this.bfTargetlogValue;
        },
        SaveVaule1() {
            if (this.inputValue1) {
                this.bfTargetlogValue = this.inputValue1
                this.isEmpty2 = false
            } else {
                this.isEmpty2 = false
                if (this.bfTargetlogValue == '' || this.bfTargetlogValue == undefined)
                    this.isEmpty2 = true;
                this.isEmpty4 = true
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate1 = false
        },
        CancelValue1() {
            this.valueUpdate1 = false;
            if (this.bfTargetlogValue == '' || this.bfTargetlogValue == undefined) {
                this.bfTargetlogValue = ''
            }
        },
        bfChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.filename = this.bfChoiseFileValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.backupfilename = this.bfTargetlogValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.bfChoiseFileValue = this.$store.state.allActionRes[this.group][this.indexing].action.filename;
                this.bfTargetlogValue = this.$store.state.allActionRes[this.group][this.indexing].action.backupfilename;
            } else {
                this.bfChoiseFileValue = '';
                this.bfTargetlogValue = '';
            }
        },
        validateValue() {
            if (this.bfChoiseFileValue == '' || this.bfChoiseFileValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.bfTargetlogValue == '' || this.bfTargetlogValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        }
    },

    beforeUpdate() {
        this.backValue();
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
    }

};
//步9解压
let unpackHaul = {
    name: 'unpack-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入文件所在路径，并支持tar和uzip命令其中一种" v-model="ufChoiseFileValue" @on-change="ufChange" :class="{'as-action-error':isEmpty1}"></i-input>
                <Icon type="ios-compose-outline" @click="valueChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
                <i-col :md="2" :xs="2"><span>解压至</span></i-col>
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入目标目录" v-model="ufTargetlogValue" @on-change="ufChange" :class="{'as-action-error':isEmpty2}"></i-input>
                <Icon type="ios-compose-outline" @click="valueChange1" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
             </row>
             <Modal v-model="valueUpdate" width="60%" :mask-closable="false" :styles="{top: '174px'}">
             <div slot="header" style='font-size: .9rem;'>
                 <strong>编辑文件名称</strong>
             </div>
             <i-input :readonly="status" placeholder="请输入文件所在路径，并支持tar和uzip命令其中一种" v-model="inputValue"  :class="{'as-action-error':isEmpty3}"></i-input>
             <div slot="footer">
                     <i-button :disabled="status" type="primary" size="small" @click="SaveVaule">保存</i-button>
                     <i-button  type="ghost" size="small" @click="CancelValue">取消</i-button>
             </div>
         </Modal>
         <Modal v-model="valueUpdate1" width="60%" :mask-closable="false" :styles="{top: '174px'}">
             <div slot="header" style='font-size: .9rem;'>
                 <strong>编辑目标目录</strong>
             </div>
             <i-input :readonly="status" placeholder="请输入目标目录" v-model="inputValue1"  :class="{'as-action-error':isEmpty4}"></i-input>
             <div slot="footer">
                     <i-button :disabled="status" type="primary" size="small" @click="SaveVaule1">保存</i-button>
                     <i-button  type="ghost" size="small" @click="CancelValue1">取消</i-button>
             </div>
         </Modal>
        </div>
    `,
    data() {
        return {
            ufChoiseFileValue: '',
            ufTargetlogValue: '',
            isEmpty1: false,
            isEmpty2: false,
            isEmpty3: false,
            isEmpty4: false,
            status: false,
            valueUpdate: false,
            inputValue: '',
            valueUpdate1: false,
            inputValue1: ''
        }
    },
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        valueChange() {
            if (this.ufChoiseFileValue == '' || this.ufChoiseFileValue == undefined) {
                this.ufChoiseFileValue = ''
            }
            this.isEmpty3 = false;
            this.valueUpdate = true;
            this.inputValue = this.ufChoiseFileValue;
        },
        SaveVaule() {
            if (this.inputValue) {
                this.ufChoiseFileValue = this.inputValue
                this.isEmpty1 = false
            } else {
                this.isEmpty1 = false
                if (this.ufChoiseFileValue == '' || this.ufChoiseFileValue == undefined)
                    this.isEmpty1 = true
                this.isEmpty3 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate = false
        },
        CancelValue() {
            this.valueUpdate = false;
            if (this.ufChoiseFileValue == '' || this.ufChoiseFileValue == undefined) {
                this.ufChoiseFileValue = ''
            }
        },
        valueChange1() {
            if (this.ufTargetlogValue == '' || this.ufTargetlogValue == undefined) {
                this.ufTargetlogValue = ''
            }
            this.isEmpty4 = false;
            this.valueUpdate1 = true;
            this.inputValue1 = this.ufTargetlogValue;
        },
        SaveVaule1() {
            if (this.inputValue1) {
                this.ufTargetlogValue = this.inputValue1
                this.isEmpty2 = false
            } else {
                this.isEmpty2 = false
                if (this.ufTargetlogValue == '' || this.ufTargetlogValue == undefined)
                    this.isEmpty2 = true
                this.isEmpty4 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate1 = false
        },
        CancelValue1() {
            this.valueUpdate1 = false;
            if (this.ufChoiseFileValue == '' || this.ufChoiseFileValue == undefined) {
                this.ufChoiseFileValue = ''
            }
        },
        ufChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.targetfile = this.ufChoiseFileValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.targetdir = this.ufTargetlogValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.ufChoiseFileValue = this.$store.state.allActionRes[this.group][this.indexing].action.targetfile;
                this.ufTargetlogValue = this.$store.state.allActionRes[this.group][this.indexing].action.targetdir;
            } else {
                this.ufChoiseFileValue = '';
                this.ufTargetlogValue = '';
            }
        },
        validateValue() {
            if (this.ufChoiseFileValue == '' || this.ufChoiseFileValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.ufTargetlogValue == '' || this.ufTargetlogValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        }
    },
    beforeUpdate() {
        this.backValue();
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
    }
};
// 创建目录
let createdirHaul = {
    name: 'createdir-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="24" :xs="18"><i-input :readonly="status" type="text" placeholder="请输入要创建的目录，例如：/tmp/aaa/bbb" v-model="chChoiseDeleteFileValue" @on-change="chChange" :class="{'as-action-error':isEmpty1}"></i-input></i-col>
              </row>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            chChoiseDeleteFileValue: '',
            isEmpty1: false,
            status: false
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        chChange() {
            this.setValue();
            this.validateValue();
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.dirname = this.chChoiseDeleteFileValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.chChoiseDeleteFileValue = this.$store.state.allActionRes[this.group][this.indexing].action.dirname;
            } else {
                this.chChoiseDeleteFileValue = '';
            }
        },
        validateValue() {
            if (this.chChoiseDeleteFileValue == '' || this.chChoiseDeleteFileValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            return this.isEmpty1;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
var count = 1;
var interval;
var filevalue;
//修改文件内容
let modifyfileHaul = {
    name: 'modifyfile-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="11" :xs="8"><i-input :readonly="status" placeholder="请输入目标文件" v-model="cfFileNameValue" @on-change="cfChange" :class="{'as-action-error':isEmpty1}"></i-input>
                <Icon type="ios-compose-outline" @click="valueChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col>
                <i-col :md="2" :xs="2"><span>内容</span></i-col>
                <i-col :md="11" :xs="8"><i-input :readonly="status" type="textarea" :autosize="{minRows: 1,maxRows: 1}"  placeholder="请输入修改文件的内容" v-model="cfFileContentValue" @on-change="cfChange" :class="{'as-action-error':isEmpty2}" style="position: relative;">
               </i-input>
               <Icon  type="ios-compose-outline" @click="textChange" style=" cursor:pointer;position: absolute;top: 0px;right: 4px;padding: 2px 4px;font-size: 1.4rem;font-weight: 600;margin: 2px;color: rgb(51, 153, 255);" ></Icon>
                </i-col> 
             </row>
             <Modal v-model="valueUpdate" width="60%" :mask-closable="false" :styles="{top: '174px'}">
             <div slot="header" style='font-size: .9rem;'>
                 <strong>编辑目标文件</strong>
             </div>
             <i-input :readonly="status" placeholder="请输入目标文件" v-model="inputValue"  :class="{'as-action-error':isEmpty3}"></i-input>
             <div slot="footer">
                     <i-button :disabled="status" type="primary" size="small" @click="SaveVaule">保存</i-button>
                     <i-button  type="ghost" size="small" @click="CancelValue">取消</i-button>
             </div>
         </Modal>
             <Modal v-model="textUpdate" width="60%" :mask-closable="false">
                <div slot="header">
                     编辑文件内容
                </div>
                <as-codemirror :readonly="control" :value.sync="creatValue" :height="550" :lineNumbers="true"></as-codemirror>
                <div slot="footer">
                        <i-button :disabled="status"  type="info" size="small" @click="SyncAuto('test')">测试同步</i-button>
                        <i-button :disabled="status"  type="info" size="small" @click="SyncAuto('formal')">正式同步</i-button>
                        <i-button :disabled="status" type="primary" size="small" @click="SaveAuto">保存</i-button>
                        <i-button type="ghost" size="small" @click="CancelAuto">取消</i-button>
                </div>
            </Modal>
        </div>
    `,
    props: {
        control: { type: Boolean, default: false },
        indexing: {
            type: Number,
            default () {
                return 0;
            }
        },
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            cfFileNameValue: '',
            cfFileContentValue: '',
            cfResData: {},
            isEmpty1: false,
            isEmpty2: false,
            isEmpty3: false,
            textUpdate: false,
            creatValue: '',
            objid: '',
            status: false,
            valueUpdate: false,
            inputValue: ''
        }
    },
    mounted() {
        this.status = this.control;
        this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        this.backValue();
        this.setValue();
    },
    methods: {
        valueChange() {
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.cfFileNameValue = ''
            }
            this.isEmpty3 = false;
            this.valueUpdate = true;
            this.inputValue = this.cfFileNameValue;
        },
        SaveVaule() {
            if (this.inputValue) {
                this.cfFileNameValue = this.inputValue
                this.isEmpty1 = false
            } else {
                this.isEmpty1 = false
                if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined)
                    this.isEmpty1 = true
                this.isEmpty3 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.valueUpdate = false
        },
        CancelValue() {
            this.valueUpdate = false;
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.cfFileNameValue = ''
            }
        },
        queryData(requestid) {
            var _this = this;
            this.spinShow()
            axios
                .get("/auto-overhaul-app/v1/syncfile/content", {
                    params: {
                        requestid: requestid,
                    }
                })
                .then(function(res) {
                    var resultData = res.data
                    if (res.data.success == true) {
                        if (resultData.data.item.status == true) {
                            filevalue = resultData.data.item.content
                            _this.setValue()
                            app.Notice('成功', '提示', '同步成功！')
                            app.$Spin.hide();
                            clearInterval(interval)
                            count = 1
                        }
                    }
                    if (res.data.success == false) {
                        app.$Spin.hide();
                        clearInterval(interval)
                        count = 1
                        app.Notice('出错', '同步失败', resultData.errmsg)
                        return false;
                    }
                    _this.creatValue = filevalue
                    return true;
                })
                .catch(function(res) {
                    app.$Spin.hide();
                    clearInterval(interval)
                    count = 1
                    app.Notice('出错', '同步失败')
                });
            return false;
        },
        spinShow() {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-spin-icon-load',
                            props: {
                                type: 'ios-loading',
                                size: 28
                            }
                        }),
                        h('div', {
                            style: {
                                fontSize: '16px'
                            }
                        }, '同步中...')
                    ])
                }
            });
        },
        textChange() {
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.cfFileContentValue = ''
            }
            this.isEmpty2 = false;
            this.textUpdate = true;
            this.creatValue = this.cfFileContentValue
        },
        SaveAuto() {
            if (this.creatValue || filevalue) {
                this.isEmpty2 = false;
                this.cfFileContentValue = this.creatValue
            } else {
                this.isEmpty2 = false;
                if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined)
                    this.isEmpty2 = true;
                this.$Notice.error({
                    desc: '请输入操作内容！'
                });
                return;
            }
            this.setValue();
            this.textUpdate = false
            clearInterval(interval);
        },
        CancelAuto() {
            this.textUpdate = false;
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.cfFileContentValue = ''
            }
            clearInterval(interval);
        },
        SyncAuto(param) {
            if (this.$store.state.allActionRes[this.group][this.indexing].objectid == '' || this.$store.state.allActionRes[this.group][this.indexing].objectid == undefined) {
                this.$Notice.error({
                    desc: '请先选择运维对象！'
                });
                return;
            }
            if (this.$store.state.allActionRes[this.group][this.indexing].action.filename == '' || this.$store.state.allActionRes[this.group][this.indexing].action.filename == undefined) {
                this.$Notice.error({
                    desc: '请输入目标文件'
                });
                return;
            }
            var objectid = this.$store.state.allActionRes[this.group][this.indexing].objectid
            var filename = this.$store.state.allActionRes[this.group][this.indexing].action.filename
            this.spinShow()
            var _this = this;
            var p = new Promise(function(resolve, reject) {
                axios
                    .post("/auto-overhaul-app/v1/syncfile/content", {
                        'objectid': objectid,
                        'fileaddr': filename,
                        'env': param
                    })
                    .then(function(res) {
                        var resultData = res.data
                        if (resultData.success) {
                            _this.queryData(resultData.data.item.requestid)
                            var newId = resultData.data.item.requestid
                            interval = setInterval(() => {
                                _this.queryData(newId)
                                count++
                                if (count > 30) {
                                    clearInterval(interval);
                                    app.$Spin.hide();
                                    app.Notice('出错', '网络繁忙，请稍后重试！', res.data.errmsg)
                                    count = 1
                                }
                            }, 2000);
                        } else {
                            clearInterval(interval);
                            app.$Spin.hide();
                            app.Notice('出错', '网络繁忙，请稍后重试！', res.data.errmsg)
                            count = 1
                        }
                    }).catch(function(res) {
                        clearInterval(interval);
                        app.$Spin.hide();
                        app.Notice('出错', '网络繁忙，请稍后重试！')
                        count = 1
                    })

            });
            return p;
        },
        cfChange() {
            this.setValue();
            this.validateValue();
        },
        setCfResData() {
            this.cfResData.value1 = this.dfChoiseDeleteFileValue;
            this.cfResData.value2 = this.cfFileContentValue;
            this.cfResData.label = '编辑';
            this.cfResData.result = this.cfResData.value1 + this.cfResData.label + this.cfResData.value2;
            this.$emit('cf-change', this.cfResData);
        },
        setValue() {
            for (var obj in this.$store.state.allActionRes[this.group][this.indexing].action) {
                if (obj !== 'name') {
                    this.$delete(this.$store.state.allActionRes[this.group][this.indexing].action, obj);
                }
            }
            this.$store.state.allActionRes[this.group][this.indexing].action.filename = this.cfFileNameValue;
            this.$store.state.allActionRes[this.group][this.indexing].action.filecontent = this.cfFileContentValue;
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.cfFileNameValue = this.$store.state.allActionRes[this.group][this.indexing].action.filename;
                this.cfFileContentValue = this.$store.state.allActionRes[this.group][this.indexing].action.filecontent;
            } else {
                this.cfFileNameValue = '';
                this.cfFileContentValue = '';
                this.creatValue = '';
            }
        },
        validateValue() {
            if (this.cfFileNameValue == '' || this.cfFileNameValue == undefined) {
                this.isEmpty1 = true;
            } else {
                this.isEmpty1 = false;
            }
            if (this.cfFileContentValue == '' || this.cfFileContentValue == undefined) {
                this.isEmpty2 = true;
            } else {
                this.isEmpty2 = false;
            }
            return this.isEmpty1 || this.isEmpty2;
        },
        beforeUpdate() {
            this.backValue();
            this.$store.state.validateFun[this.group][this.indexing]['input'] = this.validateValue;
        }
    }
};
//等待中
let waitingHaul = {
    name: 'waiting-haul',
    template: `
        <div class="as-action-component">
             <row> 
                <i-col :md="24" :xs="18"><i-input readonly type="text" v-model="waitText"></i-input></i-col>
              </row>
        </div>
    `,
    props: {
        group: {
            type: String,
            default: 'group0'
        }
    },
    data() {
        return {
            waitText: '等待操作步骤执行中，请稍等...',
        }
    },
};
let componentList = {
    downloadHaul,
    execHaul,
    modifyfile1Haul,
    scriptHaul,
    deletefileHaul,
    createfileHaul,
    createnfileHaul,
    oracleHaul,
    backupHaul,
    unpackHaul,
    createdirHaul,
    modifyfileHaul,
    waitingHaul,
}