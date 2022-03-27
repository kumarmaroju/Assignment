import {ChangeSectionsButtonStyles} from './styledComponents'

const ChangeSectionsButton = props => {
    const {children,onChangeSectionView,changeSections} = props 
    console.log(props)
    const onClickChangeSectionView = () => {
        onChangeSectionView(!changeSections)
    }
    return <ChangeSectionsButtonStyles onClick={onClickChangeSectionView}>{children}</ChangeSectionsButtonStyles>
}
export default ChangeSectionsButton