import LineItem from "../LineItem";
import { LineInfo } from 'mdkjs'

interface IProps {
    name: string;
    description: string;
    fileInfo: {
        type: string
        text: string
        extra: LineInfo[]
    }[]
}
  
export default function FileItem(props: IProps) {
    return (
        <div className="file-item" style={{ margin: 8 }}>
            <h3>
                <span>{props.name}</span>
                <span className="file-item__desc">{props.description}</span>
            </h3>
            <div className='file-item__cont' style={{ overflow: "auto" }}>
                {
                    props.fileInfo.map((item, index) => (
                        <LineItem length={props.fileInfo.length} lineNum={index + 1} key={index} lineInfo={item}/>
                    ))
                }
            </div>
        </div>
    );
}