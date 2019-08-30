Vue.component('as-action', {
    template: `
    <div class="as-action-body">
    <row>
        <i-col span="2" style="padding-right:10px;">
            <i-select v-model="selectionRes" @on-change="selectionOnChange" :class="{'as-action-error':isEmpty}"
                      :disabled="disabled">
                <i-option v-for="(item,index) in selectionData" :key="index+indexing" :value="item.value">
                    {{item.label}}
                </i-option>
            </i-select>
        </i-col>
        <i-col :lg="10" :md="10" :sm="14" :xs="18" v-for="(item,index) in selectionData" :key="index"
               v-if="selectionRes === item.value">
            <component :is="item.comp" :indexing="indexing" :group="group" :disabled="disabled"
                       :control="control"></component>
        </i-col>
        <i-col span="2" class="as-icon-body">
            <Icon title="上移" size="20" class="as-action-icon" style="color:#2D8CF0;" type="ios-arrow-up"
                  @click="upStepAction(indexing)" v-if="showUp"></Icon>
            <Icon title="下移" size="20" class="as-action-icon" style="color:#2D8CF0;" type="ios-arrow-down"
                  @click="downStepAction(indexing)" v-if="showDown"></Icon>
            <Icon title="删除" size="20" class="as-action-icon" style="color:#e92322;" type="ios-close-outline"
                  @click="deleteStepAction(indexing)" v-if="showDel"></Icon>
        </i-col>
    </row>
</div>
    `,
    name: 'as-action',
    store,
    props: {
        selectionData: {
            type: Array,
            default () {
                return this.$store.state.selectionData;
            }
        },
        current: {
            type: Object,
            default () {
                return {};
            }
        },
        group: {
            type: String,
            default: 'group0'
        },
        showUp: {
            type: Boolean,
            default: true,
        },
        showDown: {
            type: Boolean,
            default: true,
        },
        showDel: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        control: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            selectionRes: "",
            isEmpty: false,
        }
    },
    watch: {
        selectionData(val) {
            this.selectionData = val;
        },
    },
    computed: {
        indexing() {
            return this.current.step - 1;
        },
        allActionRes() {
            return this.$store.state.allActionRes;
        },
    },
    components: componentList,
    methods: {
        selectionOnChange(value) {
            this.validateValue();
            this.$store.state.allActionRes[this.group][this.indexing].action.name = value;
            let current = {};
            for (let i = 0; i < this.selectionData.length; i++) {
                if (this.selectionData[i].value == value) {
                    current = this.selectionData[i];
                    break;
                }
            }
            this.$emit('as-action-select-change', current, this.indexing);
        },
        backValue() {
            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {
                this.selectionRes = this.$store.state.allActionRes[this.group][this.indexing].action.name;
            } else {
                this.selectionRes = "";
            }
        },
        validateValue() {
            if (this.selectionRes == "") {
                this.isEmpty = true;
            } else {
                this.isEmpty = false;
            }
            return this.isEmpty;
        },
        deleteStepAction(index) {
            this.$store.state.validateFun[this.group].splice(index, 1);
            let temp = JSON.parse(JSON.stringify(this.allActionRes[this.group]));
            this.allActionRes[this.group].splice(0, this.allActionRes[this.group].length);
            temp.map(item => {
                if (item.step > index) {
                    item.step -= 1;
                }
                return item;
            });
            temp.splice(index, 1);
            setTimeout(() => {
                temp.forEach(item => {
                    this.allActionRes[this.group].push(item);
                });
                this.allActionRes[this.group].forEach((item, ind) => {
                    this.$store.commit('updateValue', { group: this.group, index: ind });
                });
            }, 0);
        },
        upStepAction(index) {
            if (index > 0) {
                let temp = JSON.parse(JSON.stringify(this.allActionRes[this.group]));
                this.allActionRes[this.group].splice(0, this.allActionRes[this.group].length);
                temp[index].step -= 1;
                temp[index - 1].step += 1;
                let tempOption = temp[index - 1];
                this.$set(temp, index - 1, temp[index]);
                this.$set(temp, index, tempOption);

                if (temp[index - 1].action.name == temp[index].action.name) {
                    setTimeout(() => {
                        temp.forEach(item => {
                            this.allActionRes[this.group].push(item);
                        });
                    }, 0);
                } else {
                    temp.forEach(item => {
                        this.allActionRes[this.group].push(item);
                    });
                }

                this.allActionRes[this.group].forEach((item, ind) => {
                    this.$store.commit('updateValue', { group: this.group, index: ind });
                });
            }
        },
        downStepAction(index) {
            if (index < this.allActionRes[this.group].length - 1) {
                let temp = JSON.parse(JSON.stringify(this.allActionRes[this.group]));
                this.allActionRes[this.group].splice(0, this.allActionRes[this.group].length);
                temp[index].step += 1;
                temp[index + 1].step -= 1;
                let tempOption = temp[index + 1];
                this.$set(temp, index + 1, temp[index]);
                this.$set(temp, index, tempOption);

                if (temp[index + 1].action.name == temp[index].action.name) {
                    setTimeout(() => {
                        temp.forEach(item => {
                            this.allActionRes[this.group].push(item);
                        });
                    }, 0);
                } else {
                    temp.forEach(item => {
                        this.allActionRes[this.group].push(item);
                    });
                }


                this.allActionRes[this.group].forEach((item, ind) => {
                    this.$store.commit('updateValue', { group: this.group, index: ind });
                });
            }
        }
    },
    mounted() {
        this.backValue();
        this.$store.state.updateFun[this.group][this.indexing] = this.backValue;
        this.$store.state.validateFun[this.group][this.indexing] = { select: this.validateValue };
    },
    beforeUpdate() {
        this.backValue();
        this.$store.state.updateFun[this.group][this.indexing] = this.backValue;
        this.$store.state.validateFun[this.group][this.indexing] = { select: this.validateValue };
    },
})