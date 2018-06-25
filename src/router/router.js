import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Api from '../config/apiurl.js';
import Unit from '../config/unit.js';
import { action } from '../redux/action/index.js';
// import { Router, Route, Link } from 'react-router';

// 默认导入首页
// 现在默认导入角色业务管理页面
import Home from '../component/home.js';

//计划性修护
// ----------------------------------------------------------------------
const Test = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/home.js').default)
    }, 'home')
};

//系统管理
const RoleManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/system/rolemanage.js').default)
    }, 'rolemanage')
};

const BusinessManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/system/businessmanage.js').default)
    }, 'businessmanage')
}

const RoleBusiness = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/system/rolebusiness.js').default)
    }, 'rolebusiness')
}

const UserRole = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/system/userrole.js').default)
    }, 'userrole')
}

//基础资料管理
const RepairRule = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/rulematerial/repairrule.js').default)
    }, 'repairrule')
}

const RepairTarget = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/rulematerial/repairtarget.js').default)
    }, 'repairtarget')
}

const UserGroup = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/workgroup/userworkgroup.js').default)
    }, 'userworkgroup')
}

const DepartGroup = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/workgroup/departworkgroup.js').default)
    }, 'departworkgroup')
}

const WorkRecard = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/attendance/workrecard.js').default)
    }, 'workrecard')
}

//作业方案
const WorkProgram = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/workprogram/workprogram.js').default)
    }, 'workprogram')
}

//计划性修护
//计划上报
const PlanReport = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/planreport/planreport.js').default)
    }, 'planreport')
}

//计划派单
const PlanOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/planorder/planorder.js').default)
    }, 'planorder')
}

//计划审批
const PlanApprove = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/planapprove/planapprove.js').default)
    }, 'planapprove')
}

//任务接单
const OrderImplement = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/orderimplement/orderimplement.js').default)
    }, 'orderimplement')
}

//工单实施
const PlanWorkOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/planworkorder/planworkorder.js').default)
    }, 'planworkorder')
}

//竣工验收
const CompletionAcceptance = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/completionacceptance/completionacceptance.js').default)
    }, 'completionacceptance')
}

//计划销项
const PlanDestroy = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/plandestroy/plandestroy.js').default)
    }, 'plandestroy')
}

//计划追踪
const PlanTrack = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/plantrack/plantrack.js').default)
    }, 'plantrack')
}

//临时性修复
//任务上报
const TaskReport = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/taskreport/taskreport.js').default)
    }, 'taskreport')
}

//任务派工
const TaskOrder = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/taskorder/taskorder.js').default)
    }, 'taskorder')
}

//任务实施
const TaskImplement = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/taskimplement/taskimplement.js').default)
    }, 'taskimplement')
}

//任务销项
const TaskDestroy = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/taskdestroy/taskdestroy.js').default)
    }, 'taskdestroy')
}

//统计分析
const Statistic = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/statistic/statistic.js').default)
    }, 'statistic')
}

//综合信息消息
const InfoNotify = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/infonotify.js').default)
    }, 'infonotify')
}

// 密码修改
const UserPassword = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/userpassword.js').default)
    }, 'userpassword')
}

// 系统用户列表
const UserSystemList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../component/userlist').default)
    }, 'userlist')
}

// 路由验证
const AuthCheck = (store) => {
    return (nextState, replace) => {
        sessionStorage.clear();
        // Do something with your store
        // console.log(nextState, replace);
        // const token = sessionStorage.getItem('token')
        // if (!token) {
        //     replaceState('/login')
        //     // hashHistory.push('/login')
        // }
        // 确保本地通信的store里面有了token值
        var state = store.getState();
        // 获取用户信息成功后

        // 获取地图服务列表
        store.dispatch(action.getMapServiceList({
            pageSize: 999
        }));

        var LocalState = false;   //本地保存登录状态true
        if (LocalState === true) {
            //本地保存登录状态
            sessionStorage.setItem('userId',161 );//122
            sessionStorage.setItem('departId', 96);
            sessionStorage.setItem('userUnit', '千嘉')
            sessionStorage.setItem('name', 'zxy');
            state.authData.logined = true;
            store.dispatch(action.getSideBarData({}, () => { }));
        } else {
            if (JSON.stringify(state.authData.result) === '{}') {
                // 如果没有token
                // 清理本地登录状态
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('logined');
                localStorage.removeItem('userId');

                // 如果没有 则访问url是否带了code
                // 如果没有则去访问认证中心
                var query = Unit.getSearch();
                var code = query ? (query.code ? query.code : '') : '';
                if (code === "") {
                    location.href = Api.Auth.LoginCallback;
                }
                // 如果没有token
                // 确保有code值 可以交换到token
                state.authData.code = code;

                // 利用code交换token
                store.dispatch(action.getAuthToken({
                    grant_type: 'authorization_code',   //固定值
                    client_id: Api.Client_Id,           //应用ID
                    client_secret: Api.Secret,          //应用 clientSecret
                    code: code                    //回调得到的code值
                }, (res, err) => {
                    // code 过期
                    if (err) {
                        // sessionStorage.removeItem('logined');
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('userId');
                        location.href = Api.Auth.LoginCallback;
                        // 跳转到认证中心重新获取code
                    } else {
                        // 如果获取到了token
                        // 根据token获取获取用户信息
                        store.dispatch(action.getAuthUserData({
                            token: res.accessToken
                        }, (res, departs) => {
                            // 获取用户信息成功后
                            // 本地保存登录状态
                            sessionStorage.setItem('userId', res.id);
                            sessionStorage.setItem('name', res.realname);
                            sessionStorage.setItem('departId', departs[0].id);
                            sessionStorage.setItem('userUnit', res.department.name);
                            sessionStorage.setItem('userData', JSON.stringify(res));
                            // sessionStorage.setItem('logined', '1');
                            state.authData.logined = true;

                            // 并更新保存用户信息
                            store.dispatch(action.saveUserData({
                                userId: res.id,
                                name: res.realname,
                                userCode: res.username,
                                sex: res.sex,
                                phone: res.telphone,
                                remarks: res.remarks,
                                address: res.address,
                                unit: res.department ? res.department.id + ":" + res.department.name : "",
                                departs: departs
                            }, (res) => {
                                if (res.success !== true) {
                                    // 如果没有保存成功
                                    // sessionStorage.removeItem('logined');
                                    sessionStorage.removeItem('userId');
                                    sessionStorage.removeItem('token');
                                    sessionStorage.removeItem('userUnit');

                                    // this.setState({
                                    //     errorMsg: '系统后台出错啦，请联系管理员解决',
                                    //     isLogin: false
                                    // })
                                } else {
                                    // 如果用户保存成功
                                    // 判断用户此时有没有角色权限登录此系统
                                    if (res.result.remark.indexOf('没有角色权限') != -1) {
                                        // 如果没有权限
                                        // sessionStorage.removeItem('logined');
                                        sessionStorage.removeItem('userId');
                                        sessionStorage.removeItem('token');
                                        alert(res.result.name + " " + res.result.remark + " " + "2s 后将跳回登录界面");
                                        setTimeout(() => {
                                            location.href = Api.isTempRelease ? 'http://www.gaspis.cn' : 'http://120.27.197.238/login'
                                        }, 2000);
                                    } else {
                                        // 系统后台认证权限成功后
                                        // 获取人员导航菜单
                                        if (res.result.userLevel > 2) {
                                            store.dispatch(action.getSideBarData({}, () => { }));
                                        }
                                    }
                                }
                            }));
                        }));
                    }
                }));
            }
        }
    }
}

class Roots extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
// console.log(Router, Route, Redirect, IndexRoute, browserHistory, hashHistory)
// 浏览器历史这里统一使用browserHistory 不使用hashHistory
export default (store) => {
    return (
        <Route path="/" component={Roots} onEnter={AuthCheck(store)}>    // 去掉中间的#符号
            <IndexRoute component={Home} />
            <Route path="/index" component={Home} />
            <Route path="/sis" component={Home} />

            //计划性修护
            <Route path="/planreport" getComponent={PlanReport} />                      //计划上报
            <Route path="/planapprove" getComponent={PlanApprove} />                    //计划审批
            <Route path="/planorder" getComponent={PlanOrder} />                        //任务派单
            <Route path="/orderimplement" getComponent={OrderImplement} />              //任务接单
            <Route path="/planworkorder" getComponent={PlanWorkOrder} />                //工单实施
            <Route path="/completionacceptance" getComponent={CompletionAcceptance} />  //竣工验收
            <Route path="/plandestroy" getComponent={PlanDestroy} />                    //计划销项
            <Route path="/plantrack" getComponent={PlanTrack} />                        //计划销项

            //临时性修护
            <Route path="/taskreport" getComponent={TaskReport} />                      //任务上报
            <Route path="/taskorder" getComponent={TaskOrder} />                        //任务派工
            <Route path="/taskimplement" getComponent={TaskImplement} />                //任务实施
            <Route path="/taskdestroy" getComponent={TaskDestroy} />                    //计划销项

            //统计分析
            <Route path="/statistic" getComponent={Statistic} />                        //统计分析

            //基础资料管理
            <Route path="/repairrule" getComponent={RepairRule} />                      //维护规程
            <Route path="/repairtarget" getComponent={RepairTarget} />                  //维护对象
            <Route path="/workprogram" getComponent={WorkProgram} />                    //作业方案
            <Route path="/userworkgroup" getComponent={UserGroup} />                    //工作组-人员
            <Route path="/departworkgroup" getComponent={DepartGroup} />                //工作组-部门
            <Route path="/workrecard" getComponent={WorkRecard} />                      //人员考勤

            //系统管理
            <Route path="/businessmanage" getComponent={BusinessManage} />              //模块管理
            <Route path="/rolemanage" getComponent={RoleManage} />                      //角色管理页面
            <Route path="/rolebusiness" getComponent={RoleBusiness} />                  //角色业务分配页面
            <Route path="/userrole" getComponent={UserRole} />                          //用户角色管理页面

            //综合信息消息
            <Route path="/infonotify" getComponent={InfoNotify} />                      //应急资源统计

            <Route path="/userpassword" getComponent={UserPassword} />      // 密码修改
            <Route path="/userlist" getComponent={UserSystemList} />        // 系统用户列表
            <Redirect from="*" to="/" />
        </Route >
    )
}