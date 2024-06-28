type headstateTypes = {
    description?: string
    title: string
    loading?: Ref<boolean>
}

const headstate = {
    title: ref('Loading...'),
    description: ref(''),

    loading: ref(false)
}

export const usePageHeader = () => {
    const setPageHeader = ({ description = 'Overview', title = 'The UnNamed Title', loading = headstate.loading }: headstateTypes) => {
        headstate.description.value = description
        headstate.title.value = title
        headstate.loading = loading
    }

    return { headstate, setPageHeader }
}
