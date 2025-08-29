import MemberDetailComponent from "@/components/MemberDetailComponent.vue";
import MemberListComponent from "@/components/MemberListComponent.vue";
import MemberCreate from "@/views/MemberCreate.vue";
import MemberLogin from "@/views/MemberLogin.vue";
import MyPage from "@/views/MyPage.vue";

export const memberRouter = [
    {
        path: "/member/create",
        name: "MemberCreate",
        component: MemberCreate
    },
    {
        path: "/member/dologin",
        name: "MemberLogin",
        component: MemberLogin
    },
    {
        path: "/member/list",
        name: "MemberListComponent",
        component: MemberListComponent
    },
    {
        path: "/member/detail/:memberId",
        name: "MemberDetailComponent",
        component: MemberDetailComponent,
        props: {pageTitle: "회원상세정보", isMyPage: false}
    },
    {
        path: "/member/myinfo",
        name: "MyPage",
        component: MyPage
    }
]