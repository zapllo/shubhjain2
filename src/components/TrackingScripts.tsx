'use client'

import { useEffect, useState } from 'react'
import { ITrackingScript } from '@/lib/models/Content'

export default function TrackingScripts() {
  const [scripts, setScripts] = useState<ITrackingScript[]>([])

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        console.log('🔍 Fetching tracking scripts...')
        const response = await fetch('/api/tracking-scripts')
        console.log('📡 API Response status:', response.status)
        
        if (response.ok) {
          const data = await response.json()
          console.log('📊 Tracking scripts data:', data)
          console.log('📊 Scripts array:', data.trackingScripts)
          setScripts(data.trackingScripts || [])
        } else {
          console.error('❌ API response not ok:', response.status)
          const errorText = await response.text()
          console.error('❌ Error text:', errorText)
        }
      } catch (error) {
        console.error('❌ Fetch error:', error)
      }
    }

    fetchScripts()
  }, [])

  useEffect(() => {
    console.log('🚀 Scripts state updated:', scripts)
    if (scripts.length === 0) {
      console.log('⚠️ No scripts to inject')
      return
    }

    console.log('🚀 Injecting', scripts.length, 'tracking scripts')

    scripts.forEach((script, index) => {
      console.log(`📝 Processing script ${index + 1}:`, script.name, 'Enabled:', script.enabled)
      
      if (script.enabled && script.script) {
        console.log('📝 Full script content:', script.script)
        
        // Create a temporary container to parse the HTML
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = script.script

        // Extract and execute script tags
        const scriptTags = tempDiv.querySelectorAll('script')
        console.log(`🏷️ Found ${scriptTags.length} script tags for ${script.name}`)
        
        scriptTags.forEach((scriptTag, scriptIndex) => {
          console.log(`📜 Processing script tag ${scriptIndex + 1}/${scriptTags.length} for ${script.name}`)
          
          // Create a unique ID for each script tag within the tracking script
          const uniqueId = `${script.id}-${scriptIndex}`
          
          // Check if this specific script already exists
          const existingScript = document.querySelector(`script[data-tracking-script-id="${uniqueId}"]`)
          if (existingScript) {
            console.log(`⚠️ Script tag ${scriptIndex + 1} already exists for ${script.name}`)
            return
          }
          
          const newScript = document.createElement('script')
          
          // Copy attributes
          Array.from(scriptTag.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value)
            console.log(`📋 Copied attribute: ${attr.name}="${attr.value}"`)
          })
          
          // Copy content
          if (scriptTag.src) {
            newScript.src = scriptTag.src
            console.log(`📂 External script ${scriptIndex + 1}: ${scriptTag.src}`)
          } else {
            newScript.textContent = scriptTag.textContent
            console.log(`📜 Inline script ${scriptIndex + 1}:`, scriptTag.textContent?.substring(0, 100) + '...')
          }
          
          // Add unique identifier for this specific script tag
          newScript.setAttribute('data-tracking-script-id', uniqueId)
          newScript.setAttribute('data-tracking-script-name', script.name)
          newScript.setAttribute('data-tracking-script-index', scriptIndex.toString())
          
          // Inject into head
          document.head.appendChild(newScript)
          console.log(`✅ Script tag ${scriptIndex + 1} injected into head for ${script.name}`)
          
          // Small delay between script injections to ensure proper loading
          if (scriptIndex < scriptTags.length - 1) {
            setTimeout(() => {
              console.log(`⏰ Delay before next script for ${script.name}`)
            }, 100)
          }
        })

        // Handle noscript tags
        const noscriptTags = tempDiv.querySelectorAll('noscript')
        if (noscriptTags.length > 0) {
          console.log(`🔍 Found ${noscriptTags.length} noscript tags for ${script.name}`)
          noscriptTags.forEach((noscriptTag, noscriptIndex) => {
            const uniqueId = `${script.id}-noscript-${noscriptIndex}`
            const existingNoscript = document.querySelector(`noscript[data-tracking-script-id="${uniqueId}"]`)
            if (!existingNoscript) {
              const newNoscript = document.createElement('noscript')
              newNoscript.innerHTML = noscriptTag.innerHTML
              newNoscript.setAttribute('data-tracking-script-id', uniqueId)
              newNoscript.setAttribute('data-tracking-script-name', script.name)
              document.body.appendChild(newNoscript)
              console.log(`✅ Noscript tag ${noscriptIndex + 1} added to body for ${script.name}`)
            }
          })
        }
      } else {
        console.log('⏭️ Skipping disabled or empty script:', script.name)
      }
    })

    // Check what got injected after a short delay
    setTimeout(() => {
      const injectedScripts = document.querySelectorAll('script[data-tracking-script-name]')
      console.log('🔍 Total injected tracking scripts:', injectedScripts.length)
      injectedScripts.forEach((script, index) => {
        const scriptElement = script as HTMLScriptElement
        console.log(`📋 Script ${index + 1}:`, {
          name: scriptElement.getAttribute('data-tracking-script-name'),
          id: scriptElement.getAttribute('data-tracking-script-id'),
          src: scriptElement.src || 'inline',
          content: scriptElement.textContent?.substring(0, 50) + '...'
        })
      })
      
      // Check if gtag is now available
      console.log('🔍 Final check - Google Analytics gtag:', !!window.gtag)
      console.log('🔍 Final check - dataLayer:', !!(window as any).dataLayer)
    }, 2000)
  }, [scripts])

  return null
}