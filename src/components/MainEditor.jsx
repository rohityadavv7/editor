import React from 'react'
import SampleAudio from './SampleAudio'
import EditorWindow from './EditorWindow'

export default function MainEditor() {
  return (
    <div>
        <div>
            <SampleAudio/>
        </div>

        <div>
            <EditorWindow/>
        </div>
    </div>
  )
}
