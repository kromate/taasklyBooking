import { useCustomHead } from '../core/head'

type headstateTypes = {
    title: string
    description?: string
    btnText?: string
    btnCall?: () => void
    loading?: Ref<boolean>
}

const headstate = {
    title: ref('Loading...'),
    description: ref(),
    btnText: ref(''),
    btnCall: ref(() => {}),
    loading: ref(false)
}



export const usePageHeader = () => {
    const setPageHeader = ({ description, title = 'The UnNamed Title', btnText, btnCall, loading = headstate.loading }: headstateTypes) => {
        headstate.description.value = description
        headstate.title.value = title
        headstate.btnText.value = btnText as string
        headstate.btnCall.value = btnCall as () => void
        headstate.loading = loading

        useCustomHead({
            title: `${title} | Taaskly`,
            desc: description
        })
    }


    return { headstate, setPageHeader }
}
