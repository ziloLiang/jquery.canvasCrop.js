# jquery.canvasCrop.js
canvas图片截取插件
<ul>
    <li><h3>1 依赖</h3>jquery</li><br>
    <li><h3>2 支持</h3>AMD模块化 移动端触摸移动</li><br>
    <li><h3>3 外部调用参数</h3>
        <table>
            <tr>
                <th>参数名 key</th>
                <th>必选/可选</th>
                <th>描述</th>
                <th>值类型 value</th>
            </tr>
            <tr>
                <td><b>cropBox</b></td>
                <td>可选</td>
                <td>外部容器选择器</td>
                <td>".imageBox"(默认值)</td>
            </tr>
            <tr>
                <td><b>thumbBox</b></td>
                <td>可选</td>
                <td>内部容器选择器</td>
                <td>".thumbBox"(默认值)</td>
            </tr>
            <tr>
                <td><b>imgSrc</b></td>
                <td>可选</td>
                <td>初始图片链接</td>
                <td></td>
            </tr>
            <tr>
                <td><b>limitOver</b></td>
                <td>可选</td>
                <td>限制被剪切图片初始宽高</td>
                <td>0：采用图片原始格式，1：根据外部容器宽高缩放图片(默认值) 2：根据内部容器宽高缩放图片</td>
            </tr>
            <tr>
                <td><b>isMoveOver</b></td>
                <td>可选</td>
                <td>是否限制被剪切图片拖动超出边界</td>
                <td>true:限制 false:不限制(默认值) </td>
            </tr>
        </table>
    </li>
    <li><h3>4 可用方法</h3>
        <table>
            <tr>
                <th>方法名</th>
                <th>方法简介</th>
                <th>参数</th>
            </tr>
            <tr>
                <td><b>rotate</b></td>
                <td>旋转</td>
                <td>deg(旋转角度)</td>
            </tr>
            <tr>
                <td><b>scale</b></td>
                <td>放大缩小</td>
                <td>ratio(伸缩倍数)</td>
            </tr>
            <tr>
                <td><b>getDataURL</b></td>
                <td>获取剪切后的图片链接</td>
                <td></td>
            </tr>
        </table>
    </li>
</ul>


