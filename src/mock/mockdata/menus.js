export default [
    {
        key: 'example',
        text: 'Example',
        icon: 'fa-file-code-o',
        path: '',
    },
    {
        key: 'example-menus-promise',
        parentKey: 'example',
        text: '菜单&权限',
        icon: 'fa-users',
        path: '/organization/menus',
    },
    {
        key: 'example-form-layout',
        parentKey: 'example',
        text: '表单布局',
        icon: 'fa-users',
        path: '/form/layout',
    },
    {
        key: 'example-css-module',
        parentKey: 'example',
        text: 'css module',
        icon: 'fa-users',
        path: '/example/css',
    },
    {
        key: 'example-users',
        parentKey: 'example',
        text: '用户管理',
        icon: 'fa-users',
        path: '/example/users',
    },
    {
        key: 'example-crop-image',
        parentKey: 'example',
        text: '图片裁剪',
        icon: 'fa-users',
        path: '/example/crop-image',
    },
    {
        key: 'example-zip-file',
        parentKey: 'example',
        text: '图片压缩',
        icon: 'fa-users',
        path: '/example/zip-file',
    },
    {
        key: 'example-sync-tree',
        parentKey: 'example',
        text: '树',
        icon: 'fa-users',
        path: '/example/sync-tree',
    },
    {
        key: 'example-test',
        parentKey: 'example',
        text: '测试',
        icon: 'fa-users',
        path: '/example/test',
    },
    {
        key: 'example-test222',
        parentKey: 'example',
        text: '测试2',
        icon: 'fa-users',
        path: '/example/test2',
    },
    {
        key: 'example-promise-ajax',
        parentKey: 'example',
        text: 'promise-ajax',
        icon: 'fa-th-list',
        path: '/example/promise-ajax',
    },
    {
        key: 'example-actions',
        parentKey: 'example',
        text: 'actions',
        icon: 'fa-th-list',
        path: '/example/actions',
    },
    {
        key: 'example-font-icon',
        parentKey: 'example',
        text: 'font-icon',
        icon: 'fa-th-list',
        path: '/example/font-icon',
    },
    {
        key: 'example-iframe',
        parentKey: 'example',
        text: '测试iframe',
        icon: 'fa-th-list',
        path: '/example/iframe-test',
        url: 'http://image.baidu.com/',
    },
    {
        key: 'example-iframe2',
        parentKey: 'example',
        text: '测试iframe2',
        icon: 'fa-th-list',
        path: '/example/iframe-test2',
        url: 'https://vuex.vuejs.org/en/',
    },
    {
        key: 'example-iframe3',
        parentKey: 'example',
        text: '测试iframe3',
        icon: 'fa-th-list',
        path: '/example/iframe-test3',
        url: 'https://vuex.vuejs.org/',
    },
    {
        key: 'example-text-menu',
        parentKey: 'example',
        text: '一级菜单',
        icon: 'fa-th-list',
        path: '',
    },
    {
        key: 'example-text-menu12',
        parentKey: 'example-text-menu',
        text: '二级菜单1',
        icon: 'fa-th-list',
        path: '/test/menu/12',
    },
    {
        key: 'example-text-menu13',
        parentKey: 'example-text-menu',
        text: '二级菜单2',
        icon: 'fa-th-list',
        path: '',
    },
    {
        key: 'example-text-menu131',
        parentKey: 'example-text-menu13',
        text: '三级菜单1',
        icon: 'fa-th-list',
        path: '/test/menu/131',
    },
    {
        key: 'example-text-menu132',
        parentKey: 'example-text-menu13',
        text: '三级菜单2',
        icon: 'fa-th-list',
        path: '/test/menu/132',
    },
    {
        key: 'base-information',
        text: '基础信息维护',
        icon: 'fa-users',
        path: '',
    },
    {
        key: 'common001',
        parentKey: 'base-information',
        text: '系统管理',
        icon: 'fa-sitemap',
        path: '/base-information/system_page',
    },
    {
        key: 'common002',
        parentKey: 'base-information',
        text: '管理用户管理',
        icon: 'fa-users',
        path: '/base-information/manager',
    },
    {
        key: 'common003',
        parentKey: 'base-information',
        text: '业务用户管理',
        icon: 'fa-users',
        path: '/base-information/business/users',
    },
    {
        key: 'common004',
        parentKey: 'base-information',
        text: '角色管理',
        icon: 'fa-lock',
        path: '/base-information/roles',
    },
    {
        key: 'common005',
        parentKey: 'base-information',
        text: '权限管理',
        icon: 'fa-lock',
        path: '/base-information/permissions',
    },
    {
        key: 'system',
        text: '系统',
        icon: 'fa-th-list',
        order: 1,
        functions: [],
    },
    {
        key: 'system-004002',
        parentKey: 'system',
        text: '修改密码',
        icon: 'fa-lock',
        path: '/system/profile/pass',
        order: 1,
        functions: [],
    },
    {
        key: 'system-002',
        parentKey: 'system',
        text: '系统设置',
        icon: 'fa-cog',
        path: '/system/settings',
        order: 1,
        functions: [],
    },
    {
        key: 'system-004001',
        parentKey: 'system',
        text: '修改个人信息',
        icon: 'fa-users',
        path: '/system/profile/message',
        order: 1,
        functions: [],
    },
];
