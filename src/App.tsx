import { Space, Typography } from '@douyinfe/semi-ui'
import './App.css'

const { Title } = Typography;

type mayUndefined<T> = T | undefined;

class DailyWork {
    workName: mayUndefined<string>;
    workStatus: mayUndefined<boolean>;
    constructor(name: string, status: boolean) {
        this.workName = name;
        this.workStatus = status;
    }
}

function App() {

    const data = new DailyWork('360', false)
    console.log("%c 🍞 data", "color:#2eafb0", data);

    // 定义一个函数，确定今天是周几
    const getDay = () => {

    }

    return (
        <div className="w-full h-full p-5">
            <Space className={'w-full h-full'} vertical align={'start'}>
                <Title>简易日报生成器</Title>
            </Space>
        </div>
    )
}

export default App
