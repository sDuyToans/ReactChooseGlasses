import GlassItem from '../Glass-Item/Glass-Item.component';
import './Body-footer.styles.scss';

const BodyFooter = ({ data, state, onChangeGlassHandler }) => {
    return (
        <div className="body-footer">
            <div className="container">
                { data && data.map(glass => <GlassItem key={glass.id} glassItem={glass}  onChangeGlassHandler={onChangeGlassHandler}/>)}
            </div>
        </div>
    )
}
export default BodyFooter;