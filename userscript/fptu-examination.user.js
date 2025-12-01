// ==UserScript==
// @name         FPTU Examination
// @namespace    https://github.com/ruskicoder
// @version      2.0.3
// @description  Export exam schedules from FPT University FAP system to .ics calendar files
// @author       ruskicoder (github.com/ruskicoder)
// @match        https://fap.fpt.edu.vn/Exam/ScheduleExams.aspx
// @grant        GM_download
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_info
// @run-at       document-idle
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTFjZDEyZjQxLCAyMDI0LzExLzA4LTE2OjA5OjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjYuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDgtMDRUMDU6NTM6NTUrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA4LTA0VDE1OjMwOjQ1KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTA4LTA0VDE1OjMwOjQ1KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmYjY3YWQ0Yi05MDEzLTQ5MDktODY5OS05NDEyMWRkMTBjN2EiIHhtcE1NOkRvY3VtZW50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
// ==/UserScript==

(function() {
    'use strict';

    // Utility functions
    const sanitizeString = (str) => {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    const createSafeElement = (options) => {
        const { tag, text, className, attributes = {} } = options;
        const element = document.createElement(tag);
        
        if (text) element.textContent = text;
        if (className) {
            if (Array.isArray(className)) {
                element.classList.add(...className);
            } else {
                element.className = className;
            }
        }
        
        Object.entries(attributes).forEach(([attr, value]) => {
            element.setAttribute(attr, value);
        });
        
        return element;
    };

    // Time formatting function
    const fmtTime = (t) => {
        if (!t || typeof t !== "string") return { hour: 0, minute: 0 };
        
        const cleaned = t.trim().replace(/\s+/g, "");
        
        if (cleaned.match(/\d+h\d*/i)) {
            const [h, m = "0"] = cleaned.replace(/h/i, ":").split(":").map(Number);
            return { hour: h, minute: m };
        }
        
        if (cleaned.includes(":")) {
            const [h, m = "0"] = cleaned.split(":").map(Number);
            return { hour: h, minute: m };
        }
        
        if (/^\d{1,2}$/.test(cleaned)) {
            const h = Number(cleaned);
            return { hour: h, minute: 0 };
        }
        
        if (cleaned.includes(".")) {
            const [h, m = "0"] = cleaned.split(".").map(Number);
            return { hour: h, minute: m };
        }
        
        return { hour: 0, minute: 0 };
    };

    // Extract schedule from page
    const extractSchedule = () => {
        try {
            const rows = Array.from(document.querySelectorAll("#ctl00_mainContent_divContent table tr"))
                .slice(1)
                .map(tr => Array.from(tr.cells).map(td => td.textContent.trim()));

            const events = rows
                .filter(row => row.length >= 8 && row[3] && row[5] !== undefined)
                .map(row => {
                    const [no, code, name, date, room, time, form, exam, ...rest] = row;
                    
                    const [day, month, year] = date.split("/").map(Number);
                    const [startStr, endStr] = time.split("-");
                    const start = new Date(year, month - 1, day, fmtTime(startStr).hour, fmtTime(startStr).minute);
                    const end = new Date(year, month - 1, day, fmtTime(endStr).hour, fmtTime(endStr).minute);
                    
                    let rawTag = "";
                    if (exam && exam.trim()) {
                        rawTag = exam.trim().toUpperCase();
                    } else if (rest.length > 0 && rest[0] && rest[0].trim()) {
                        rawTag = rest[0].trim().toUpperCase();
                    }
                    
                    const formLower = (form || "").toLowerCase();
                    
                    let tag = null;
                    if (rawTag === "2NDFE") tag = "2NDFE";
                    else if (rawTag === "2NDPE") tag = "2NDPE";
                    else if (rawTag === "PE") tag = "PE";
                    else if (rawTag === "FE") tag = "FE";
                    else if (!rawTag || rawTag === "") {
                        if (formLower.includes("2nd") && formLower.includes("fe")) tag = "2NDFE";
                        else if (formLower.includes("2nd") && formLower.includes("pe")) tag = "2NDPE";
                        else if (formLower.includes("practical_exam") || formLower.includes("project presentation")) tag = "PE";
                        else if (formLower.includes("multiple_choices") || formLower.includes("speaking")) tag = "FE";
                    }

                    return {
                        title: code || "Unknown",
                        location: room || "",
                        description: form || "",
                        start: start.toISOString(),
                        end: end.toISOString(),
                        tag
                    };
                });

            return events;
        } catch (e) {
            console.error("Extract schedule error:", e);
            return [];
        }
    };

    // ICS generator
    const ICS = function(uid = "fptu", prod = "examination") {
        const SEPARATOR = '\r\n';
        let eventsData = [];
        const calendarStart = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:' + prod,
            'CALSCALE:GREGORIAN'
        ].join(SEPARATOR);
        const calendarEnd = 'END:VCALENDAR';

        return {
            addEvent: function(title, desc, loc, start, end) {
                const now = new Date();
                const fmt = d => {
                    let s = d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + 'Z';
                    if (s.endsWith('ZZ')) s = s.slice(0, -1);
                    return s;
                };
                let stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + 'Z';
                if (stamp.endsWith('ZZ')) stamp = stamp.slice(0, -1);
                const uidStr = fmt(now) + '-' + Math.random().toString(36).substring(2, 8) + '@' + prod;
                eventsData.push([
                    'BEGIN:VEVENT',
                    'UID:' + uidStr,
                    'DTSTAMP:' + stamp,
                    'DTSTART:' + fmt(start),
                    'DTEND:' + fmt(end),
                    'SUMMARY:' + title,
                    'DESCRIPTION:' + desc,
                    'LOCATION:' + loc,
                    'BEGIN:VALARM',
                    'TRIGGER:-P1D',
                    'ACTION:DISPLAY',
                    'DESCRIPTION:Nhắc nhở: Thi vào ngày mai',
                    'END:VALARM',
                    'BEGIN:VALARM',
                    'TRIGGER:-PT1H',
                    'ACTION:DISPLAY',
                    'DESCRIPTION:Nhắc nhở: Thi trong 1 giờ nữa',
                    'END:VALARM',
                    'END:VEVENT'
                ].join(SEPARATOR));
            },
            build: function() {
                return calendarStart + SEPARATOR + eventsData.join(SEPARATOR) + SEPARATOR + calendarEnd;
            }
        };
    };

    // Create exam item element
    const createExamItem = (e) => {
        const desc = (e.description + ' ' + e.title).toLowerCase();
        const examType = (e.examType || "").toLowerCase();
        const tagType = (() => {
            if (e.tag) return e.tag;
            
            const tag = (examType || "").toLowerCase();
            if (tag.includes("2ndfe") || desc.includes("2ndfe") || desc.includes("2nd fe")) return "2NDFE";
            if (tag.includes("2ndpe") || desc.includes("2ndpe") || desc.includes("2nd pe")) return "2NDPE";
            if (tag === "pe" || desc.includes("practical_exam") || desc.includes("project presentation")) return "PE";
            if (tag === "fe" || desc.includes("fe") || desc.includes("final") || desc.includes("multiple_choices") || desc.includes("speaking")) return "FE";
            return null;
        })();

        const row = document.createElement("div");
        row.className = "exam-item";

        const start = new Date(e.start);
        const end = new Date(e.end);
        const formatTime = d => d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
        const formatDate = d => d.toLocaleDateString("vi-VN");

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const examDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const diffTime = examDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const examCard = document.createElement("div");
        examCard.className = "exam-card";

        const examHeader = document.createElement("div");
        examHeader.className = "exam-header";

        const examTitle = document.createElement("div");
        examTitle.className = "exam-title";
        examTitle.textContent = e.title + " ";

        if (tagType) {
            const tagSpan = document.createElement("span");
            tagSpan.className = "tag";
            if (tagType === "2NDFE") {
                tagSpan.classList.add("secondfe");
                tagSpan.textContent = "2NDFE";
            } else if (tagType === "2NDPE") {
                tagSpan.classList.add("secondpe");
                tagSpan.textContent = "2NDPE";
            } else if (tagType === "PE") {
                tagSpan.classList.add("pe");
                tagSpan.textContent = "PE";
            } else if (tagType === "FE") {
                tagSpan.classList.add("fe");
                tagSpan.textContent = "FE";
            }
            examTitle.appendChild(tagSpan);
            examTitle.appendChild(document.createTextNode(" "));
        }

        const countdownSpan = document.createElement("span");
        countdownSpan.className = "tag countdown";
        if (diffDays < 0) {
            countdownSpan.classList.add("past");
            countdownSpan.textContent = "Đã thi";
        } else if (diffDays === 0) {
            countdownSpan.classList.add("today");
            countdownSpan.textContent = "Hôm nay";
        } else if (diffDays === 1) {
            countdownSpan.classList.add("tomorrow");
            countdownSpan.textContent = "Ngày mai";
        } else if (diffDays <= 3) {
            countdownSpan.classList.add("urgent");
            countdownSpan.textContent = "Còn " + diffDays + " ngày";
        } else {
            countdownSpan.classList.add("future");
            countdownSpan.textContent = "Còn " + diffDays + " ngày";
        }
        examTitle.appendChild(countdownSpan);

        examHeader.appendChild(examTitle);
        examCard.appendChild(examHeader);

        const examDetail = document.createElement("div");
        examDetail.className = "exam-detail";

        const createDetailLine = (label, value) => {
            const line = document.createElement("div");
            line.className = "line";
            
            const labelSpan = document.createElement("span");
            labelSpan.className = "label";
            const strong = document.createElement("strong");
            strong.textContent = label + ":";
            labelSpan.appendChild(strong);
            
            line.appendChild(labelSpan);
            line.appendChild(document.createTextNode(" " + value));
            return line;
        };

        examDetail.appendChild(createDetailLine("Phương thức", e.description || "Chưa rõ"));
        examDetail.appendChild(createDetailLine("Phòng", e.location || "Chưa rõ"));
        examDetail.appendChild(createDetailLine("Ngày thi", formatDate(start)));
        examDetail.appendChild(createDetailLine("Thời gian", formatTime(start) + " - " + formatTime(end)));

        examCard.appendChild(examDetail);
        row.appendChild(examCard);
        
        return row;
    };

    // Render exam list
    const renderExamList = (events, upcomingContainer, completedContainer) => {
        upcomingContainer.innerHTML = '';
        completedContainer.innerHTML = '';
        
        if (!events.length) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error";
            errorDiv.textContent = "Không có lịch thi nào.";
            upcomingContainer.appendChild(errorDiv);
            return;
        }

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        const upcomingExams = [];
        const completedExams = [];

        events.forEach(e => {
            const start = new Date(e.start);
            const examDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
            const diffTime = examDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays < 0) {
                completedExams.push(e);
            } else {
                upcomingExams.push(e);
            }
        });

        // Render upcoming exams
        if (upcomingExams.length === 0) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error";
            errorDiv.textContent = "Không có kỳ thi nào sắp tới.";
            upcomingContainer.appendChild(errorDiv);
        } else {
            upcomingExams.forEach(e => {
                const examItem = createExamItem(e);
                upcomingContainer.appendChild(examItem);
            });
        }

        // Render completed exams
        if (completedExams.length === 0) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error";
            errorDiv.textContent = "Không có kỳ thi nào đã hoàn thành.";
            completedContainer.appendChild(errorDiv);
        } else {
            completedExams.forEach(e => {
                const examItem = createExamItem(e);
                completedContainer.appendChild(examItem);
            });
        }

        // Update tab labels with counts
        const upcomingTab = document.getElementById("upcomingTab");
        const completedTab = document.getElementById("completedTab");
        
        if (upcomingTab) upcomingTab.textContent = `📅 Chưa thi (${upcomingExams.length})`;
        if (completedTab) completedTab.textContent = `✅ Đã thi (${completedExams.length})`;
        
        // Apply filters after rendering
        setTimeout(() => {
            applyFilters();
        }, 100);
    };

    // Export to ICS
    const exportToICS = (events) => {
        const cal = new ICS();
        let validEventsCount = 0;
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        events.forEach(e => {
            const start = new Date(e.start);
            const examDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
            const diffTime = examDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays < 0) return;

            if (!e.location || 
                e.location.trim() === "" || 
                e.location.toLowerCase().includes("chưa có") ||
                e.location.toLowerCase().includes("chưa rõ") ||
                e.location.toLowerCase() === "tba" ||
                e.location.toLowerCase() === "to be announced") {
                return;
            }

            let title = e.title;
         
            if (e.tag) {
                title += ' - ' + e.tag;
            } else {
                if (/2nd_fe/i.test(e.description)) title += ' - 2NDFE';
                else if (/practical_exam/i.test(e.description)) title += ' - PE';
                else if (/multiple_choices|final|fe/i.test(e.description)) title += ' - FE';
            }

            cal.addEvent(title, e.description, e.location, new Date(e.start), new Date(e.end));
            validEventsCount++;
        });

        if (validEventsCount === 0) {
            alert("Không có kỳ thi nào sắp tới và có phòng để xuất ra file .ics");
            return;
        }

        const blob = new Blob([cal.build()], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'lich-thi.ics');
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    };

    // Add CSS styles with Apple theme
    const addStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            /* Apple Theme Variables */
            :root {
                --color-primary-500: #007AFF;
                --color-primary-600: #0062cc;
                --color-primary-700: #004a99;
                --color-neutral-50: #ffffff;
                --color-neutral-100: #f5f5f7;
                --color-neutral-200: #e8e8ed;
                --color-neutral-300: #d2d2d7;
                --color-neutral-400: #aeaeb2;
                --color-neutral-500: #8e8e93;
                --color-neutral-600: #636366;
                --color-neutral-700: #48484a;
                --color-neutral-800: #3a3a3c;
                --color-neutral-900: #1c1c1e;
                --color-success: #34C759;
                --color-warning: #FF9500;
                --color-error: #FF3B30;
                --font-sans: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
                --radius-md: 0.625rem;
                --radius-lg: 0.75rem;
                --radius-xl: 1.25rem;
                --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
                --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            
            #fptu-exam-panel {
                position: fixed;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                width: 360px;
                height: 600px;
                background: var(--color-neutral-100);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                font-family: var(--font-sans);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            
            #fptu-exam-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                background: rgba(255, 255, 255, 0.72);
                backdrop-filter: saturate(180%) blur(20px);
                -webkit-backdrop-filter: saturate(180%) blur(20px);
                border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
            }
            
            #fptu-exam-header h2 {
                font-size: 18px;
                font-weight: 600;
                margin: 0;
                color: var(--color-neutral-900);
                letter-spacing: -0.015em;
            }
            
            .popup-controls {
                display: flex;
                align-items: center;
            }
            
            .control-btn {
                background: rgba(255, 255, 255, 0.5);
                backdrop-filter: saturate(180%) blur(10px);
                -webkit-backdrop-filter: saturate(180%) blur(10px);
                border: 0.5px solid rgba(0, 0, 0, 0.08);
                border-radius: var(--radius-sm);
                padding: 6px 12px;
                font-size: 0.8125rem;
                font-weight: 500;
                color: var(--color-neutral-700);
                cursor: pointer;
                transition: all 0.15s ease;
                margin-left: 8px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
            }
            
            .control-btn:hover {
                background: rgba(255, 255, 255, 0.65);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
            }
            
            .control-btn:active {
                background: rgba(255, 255, 255, 0.8);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
            }
            
            #fptu-exam-close {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 24px;
                color: var(--color-neutral-500);
                margin-left: 8px;
                transition: color 0.15s ease;
            }
            
            #fptu-exam-close:hover {
                color: var(--color-neutral-700);
            }
            
            .tab-navigation {
                display: flex;
                background: rgba(255, 255, 255, 0.72);
                backdrop-filter: saturate(180%) blur(20px);
                -webkit-backdrop-filter: saturate(180%) blur(20px);
                border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
            }
            
            .tab-btn {
                flex: 1;
                padding: 12px 16px;
                background: none;
                border: none;
                font-size: 0.875rem;
                font-weight: 500;
                color: var(--color-neutral-600);
                cursor: pointer;
                transition: all 0.15s ease;
                border-bottom: 2px solid transparent;
            }
            
            .tab-btn.active {
                color: var(--color-primary-500);
                border-bottom-color: var(--color-primary-500);
                background-color: rgba(0, 122, 255, 0.05);
            }
            
            .tab-btn:hover:not(.active) {
                color: var(--color-neutral-700);
                background-color: rgba(0, 0, 0, 0.03);
            }
            
            #fptu-exam-content {
                flex: 1;
                overflow-y: auto;
                padding: 12px 16px;
                background-color: var(--color-neutral-100);
            }
            
            .tab-content {
                display: none;
            }
            
            .tab-content.active {
                display: block;
            }
            
            .exam-item {
                margin-bottom: 16px;
            }
            
            .exam-card {
                background: rgba(255, 255, 255, 0.72);
                backdrop-filter: saturate(180%) blur(20px);
                -webkit-backdrop-filter: saturate(180%) blur(20px);
                border-radius: var(--radius-lg);
                border: 0.5px solid rgba(0, 0, 0, 0.04);
                padding: 20px;
                box-shadow: var(--shadow-sm);
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .exam-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            
            .exam-title {
                font-weight: 600;
                font-size: 1rem;
                color: var(--color-neutral-900);
                line-height: 1.4;
                display: flex;
                align-items: center;
                gap: 4px;
                flex-wrap: wrap;
                letter-spacing: -0.01em;
            }
            
            .tag {
                display: inline-block;
                padding: 4px 8px;
                border-radius: var(--radius-sm);
                font-size: 0.75rem;
                font-weight: 600;
                color: #fff;
                margin-left: 2px;
                white-space: nowrap;
            }
            
            .tag.fe {
                background-color: var(--color-success);
            }
            
            .tag.pe {
                background-color: var(--color-primary-500);
            }
            
            .tag.secondfe {
                background-color: var(--color-warning);
            }
            
            .tag.secondpe {
                background-color: #AF52DE;
            }
            
            .tag.countdown {
                background-color: var(--color-neutral-600);
                color: white;
            }
            
            .tag.countdown.past {
                background-color: var(--color-neutral-500);
            }
            
            .tag.countdown.today {
                background-color: var(--color-error);
            }
            
            .tag.countdown.tomorrow {
                background-color: var(--color-error);
            }
            
            .tag.countdown.future {
                background-color: var(--color-success);
            }
            
            .tag.countdown.urgent {
                background-color: var(--color-error);
            }
            
            .exam-detail {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .exam-detail .line {
                display: flex;
                align-items: flex-start;
                font-size: 0.875rem;
                color: var(--color-neutral-600);
                line-height: 1.5;
            }
            
            .exam-detail .label {
                min-width: 100px;
                color: var(--color-neutral-700);
                margin-right: 8px;
            }
            
            .error {
                padding: 15px;
                background: rgba(255, 59, 48, 0.1);
                color: var(--color-error);
                border-radius: var(--radius-md);
                text-align: center;
                font-size: 0.8125rem;
                border: 0.5px solid rgba(255, 59, 48, 0.2);
            }
            
            #fptu-exam-actions {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                padding: 12px;
                background: rgba(255, 255, 255, 0.72);
                backdrop-filter: saturate(180%) blur(20px);
                -webkit-backdrop-filter: saturate(180%) blur(20px);
                border-top: 0.5px solid rgba(0, 0, 0, 0.08);
            }
            
            .export-button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 12px 20px;
                background: var(--color-primary-500);
                color: white;
                border: none;
                border-radius: var(--radius-md);
                cursor: pointer;
                font-size: 0.875rem;
                font-weight: 500;
                transition: all 0.15s ease;
                box-shadow: var(--shadow-sm);
                min-width: 180px;
            }
            
            .export-button:hover {
                background: var(--color-primary-600);
                box-shadow: var(--shadow-md);
            }
            
            .export-button:active {
                background: var(--color-primary-700);
                box-shadow: var(--shadow-sm);
            }
            
            .button-icon {
                font-size: 16px;
            }
            
            .button-text {
                flex: 1;
            }
            
            .button-format {
                background-color: rgba(255, 255, 255, 0.3);
                color: white;
                padding: 2px 6px;
                border-radius: var(--radius-sm);
                font-size: 0.75rem;
                font-weight: 600;
            }
            
            .docs-link {
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 8px 12px;
                color: var(--color-neutral-600);
                text-decoration: none;
                font-size: 0.8125rem;
                font-weight: 500;
                border-radius: var(--radius-sm);
                transition: all 0.15s ease;
            }
            
            .docs-link:hover {
                background-color: rgba(0, 0, 0, 0.05);
                color: var(--color-neutral-700);
            }
            
            #fptu-exam-footer {
                font-size: 0.6875rem;
                text-align: center;
                padding: 8px 12px;
                color: var(--color-neutral-500);
                background: rgba(255, 255, 255, 0.5);
                backdrop-filter: saturate(180%) blur(10px);
                -webkit-backdrop-filter: saturate(180%) blur(10px);
                border-top: 0.5px solid rgba(0, 0, 0, 0.06);
            }
            
            #fptu-exam-footer a {
                color: var(--color-primary-500);
                text-decoration: none;
                transition: all 0.15s ease;
                padding: 2px 4px;
                border-radius: var(--radius-sm);
            }
            
            #fptu-exam-footer a:hover {
                color: var(--color-primary-600);
                background: rgba(0, 122, 255, 0.1);
            }
            
            #fptu-exam-footer .version {
                font-weight: 700;
                color: var(--color-neutral-600);
                margin-right: 8px;
            }
            
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
                z-index: 10001;
                display: none;
            }
            
            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--color-neutral-50);
                border: 0.5px solid var(--color-neutral-300);
                border-radius: var(--radius-xl);
                width: 300px;
                box-shadow: var(--shadow-xl);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                border-bottom: 0.5px solid var(--color-neutral-300);
                background: var(--color-neutral-50);
                border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            }
            
            .modal-header h3 {
                margin: 0;
                font-size: 1rem;
                font-weight: 600;
                color: var(--color-neutral-900);
                letter-spacing: -0.01em;
            }
            
            .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: var(--color-neutral-500);
                transition: color 0.15s ease;
            }
            
            .close-btn:hover {
                color: var(--color-neutral-700);
            }
            
            .modal-body {
                padding: 16px 20px 20px 20px;
                background: var(--color-neutral-50);
                border-radius: 0 0 var(--radius-xl) var(--radius-xl);
            }
            
            .filter-group {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 16px;
            }
            
            .filter-item {
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                font-size: 0.875rem;
                color: var(--color-neutral-800);
                padding: 2px 0;
            }
            
            .filter-item input[type="checkbox"] {
                width: 18px;
                height: 18px;
                cursor: pointer;
                accent-color: var(--color-primary-500);
                flex-shrink: 0;
            }
            
            .filter-actions {
                display: flex;
                gap: 8px;
                margin-top: 0;
            }
            
            .filter-btn {
                flex: 1;
                padding: 8px 10px;
                border: 0.5px solid var(--color-neutral-300);
                border-radius: var(--radius-md);
                background: var(--color-neutral-50);
                font-size: 0.75rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.15s ease;
                white-space: nowrap;
                color: var(--color-neutral-700);
            }
            
            .filter-btn:hover {
                background: var(--color-neutral-100);
                border-color: var(--color-neutral-400);
            }
            
            .filter-btn:active {
                background: var(--color-neutral-200);
            }
            
            .filter-btn.apply-btn {
                background: var(--color-primary-500);
                color: white;
                border-color: var(--color-primary-500);
            }
            
            .filter-btn.apply-btn:hover {
                background: var(--color-primary-600);
                border-color: var(--color-primary-600);
            }
            
            .filter-btn.apply-btn:active {
                background: var(--color-primary-700);
            }
            
            #fptu-exam-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 56px;
                height: 56px;
                border-radius: var(--radius-full);
                background: var(--color-primary-500);
                color: white;
                border: none;
                font-size: 24px;
                cursor: pointer;
                box-shadow: var(--shadow-lg);
                z-index: 9999;
                transition: all 0.2s ease;
            }
            
            #fptu-exam-toggle:hover {
                transform: scale(1.05);
                background: var(--color-primary-600);
                box-shadow: 0 20px 30px -5px rgba(0, 122, 255, 0.3);
            }
            
            #fptu-exam-toggle:active {
                transform: scale(0.95);
            }
        `;
        document.head.appendChild(style);
    };

    // Apply filters
    const applyFilters = () => {
        const upcomingItems = document.querySelectorAll("#upcomingExams .exam-item");
        const completedItems = document.querySelectorAll("#completedExams .exam-item");
        const activeFilters = JSON.parse(GM_getValue('examFilter', '{"FE":true,"PE":true,"2NDFE":true,"2NDPE":true}'));
        
        [...upcomingItems, ...completedItems].forEach(item => {
            const examCard = item.querySelector(".exam-card");
            const tags = examCard.querySelectorAll(".tag");
            let examType = null;
            
            tags.forEach(tag => {
                if (tag.classList.contains("fe")) examType = "FE";
                else if (tag.classList.contains("pe")) examType = "PE";
                else if (tag.classList.contains("secondfe")) examType = "2NDFE";
                else if (tag.classList.contains("secondpe")) examType = "2NDPE";
            });
            
            if (!examType) {
                tags.forEach(tag => {
                    const tagText = tag.textContent.trim();
                    if (tagText === "FE") examType = "FE";
                    else if (tagText === "PE") examType = "PE";
                    else if (tagText === "2NDFE") examType = "2NDFE";
                    else if (tagText === "2NDPE") examType = "2NDPE";
                });
            }
            
            if (!examType || activeFilters[examType]) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    };

    // Create UI
    const createUI = () => {
        // Add toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'fptu-exam-toggle';
        toggleBtn.innerHTML = '📅';
        toggleBtn.title = 'FPTU Examination';
        document.body.appendChild(toggleBtn);

        // Create panel
        const panel = document.createElement('div');
        panel.id = 'fptu-exam-panel';
        panel.style.display = 'none';
        panel.innerHTML = `
            <div id="fptu-exam-header">
                <h2>📅 FPTU Examination</h2>
                <div class="popup-controls">
                    <button class="control-btn" id="fptu-sync-btn" title="Đồng bộ lại lịch thi">Đồng bộ</button>
                    <button class="control-btn" id="fptu-settings-btn" title="Cài đặt hiển thị">Lọc</button>
                    <button id="fptu-exam-close">×</button>
                </div>
            </div>
            <div class="tab-navigation">
                <button id="upcomingTab" class="tab-btn active">📅 Chưa thi</button>
                <button id="completedTab" class="tab-btn">✅ Đã thi</button>
            </div>
            <div id="fptu-exam-content">
                <div id="upcomingExams" class="tab-content active"></div>
                <div id="completedExams" class="tab-content"></div>
            </div>
            <div id="fptu-exam-actions">
                <button class="export-button" id="fptu-export-btn" title="Tải xuống file .ics">
                    <span class="button-icon">📅</span>
                    <span class="button-text">Tải xuống lịch</span>
                    <span class="button-format">.ics</span>
                </button>
            </div>
            <div id="fptu-exam-footer">
                <p><span class="version">v${GM_info.script.version}</span> From FPTU with 💛 • <a href="https://github.com/ruskicoder" target="_blank">@ruskicoder</a></p>
            </div>
        `;
        document.body.appendChild(panel);

        // Create filter modal
        const modal = document.createElement('div');
        modal.id = 'filterModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Lọc lịch thi</h3>
                    <button id="closeFilter" class="close-btn">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="filter-group">
                        <label class="filter-item">
                            <input type="checkbox" id="filterFE" checked>
                            <span>FE (Final Exam)</span>
                        </label>
                        <label class="filter-item">
                            <input type="checkbox" id="filterPE" checked>
                            <span>PE (Practical Exam)</span>
                        </label>
                        <label class="filter-item">
                            <input type="checkbox" id="filter2NDFE" checked>
                            <span>2NDFE (Second Final Exam)</span>
                        </label>
                        <label class="filter-item">
                            <input type="checkbox" id="filter2NDPE" checked>
                            <span>2NDPE (Second Practical Exam)</span>
                        </label>
                    </div>
                    <div class="filter-actions">
                        <button id="selectAll" class="filter-btn">Chọn tất cả</button>
                        <button id="deselectAll" class="filter-btn">Bỏ chọn tất cả</button>
                        <button id="applyFilter" class="filter-btn apply-btn">Áp dụng</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Load filter preferences
        const filterPrefs = JSON.parse(GM_getValue('examFilter', '{"FE":true,"PE":true,"2NDFE":true,"2NDPE":true}'));
        document.getElementById("filterFE").checked = filterPrefs.FE;
        document.getElementById("filterPE").checked = filterPrefs.PE;
        document.getElementById("filter2NDFE").checked = filterPrefs["2NDFE"];
        document.getElementById("filter2NDPE").checked = filterPrefs["2NDPE"];

        // Event listeners
        toggleBtn.addEventListener('click', () => {
            panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
        });

        document.getElementById('fptu-exam-close').addEventListener('click', () => {
            panel.style.display = 'none';
        });

        // Tab switching
        document.getElementById('upcomingTab').addEventListener('click', () => {
            document.getElementById('upcomingTab').classList.add('active');
            document.getElementById('completedTab').classList.remove('active');
            document.getElementById('upcomingExams').classList.add('active');
            document.getElementById('completedExams').classList.remove('active');
        });

        document.getElementById('completedTab').addEventListener('click', () => {
            document.getElementById('completedTab').classList.add('active');
            document.getElementById('upcomingTab').classList.remove('active');
            document.getElementById('completedExams').classList.add('active');
            document.getElementById('upcomingExams').classList.remove('active');
        });

        // Filter modal
        document.getElementById('fptu-settings-btn').addEventListener('click', () => {
            modal.style.display = 'block';
        });

        document.getElementById('closeFilter').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.getElementById('selectAll').addEventListener('click', () => {
            ["filterFE", "filterPE", "filter2NDFE", "filter2NDPE"].forEach(id => {
                document.getElementById(id).checked = true;
            });
        });

        document.getElementById('deselectAll').addEventListener('click', () => {
            ["filterFE", "filterPE", "filter2NDFE", "filter2NDPE"].forEach(id => {
                document.getElementById(id).checked = false;
            });
        });

        document.getElementById('applyFilter').addEventListener('click', () => {
            const prefs = {
                FE: document.getElementById("filterFE").checked,
                PE: document.getElementById("filterPE").checked,
                "2NDFE": document.getElementById("filter2NDFE").checked,
                "2NDPE": document.getElementById("filter2NDPE").checked
            };
            GM_setValue('examFilter', JSON.stringify(prefs));
            applyFilters();
            modal.style.display = 'none';
        });

        document.getElementById('fptu-sync-btn').addEventListener('click', () => {
            const events = extractSchedule();
            GM_setValue('examSchedule', JSON.stringify(events));
            const upcomingContainer = document.getElementById('upcomingExams');
            const completedContainer = document.getElementById('completedExams');
            renderExamList(events, upcomingContainer, completedContainer);
            alert('Đã đồng bộ ' + events.length + ' lịch thi!');
        });

        document.getElementById('fptu-export-btn').addEventListener('click', () => {
            const storedData = GM_getValue('examSchedule');
            if (!storedData) {
                alert('Chưa có dữ liệu lịch thi. Vui lòng nhấn Đồng bộ trước.');
                return;
            }
            
            try {
                const events = JSON.parse(storedData);
                exportToICS(events);
            } catch (e) {
                console.error('Parse error:', e);
                alert('Dữ liệu lịch thi bị lỗi. Vui lòng đồng bộ lại.');
            }
        });

        // Auto-sync on load
        setTimeout(() => {
            const events = extractSchedule();
            if (events.length > 0) {
                GM_setValue('examSchedule', JSON.stringify(events));
                const upcomingContainer = document.getElementById('upcomingExams');
                const completedContainer = document.getElementById('completedExams');
                renderExamList(events, upcomingContainer, completedContainer);
            }
        }, 1000);
    };

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            addStyles();
            createUI();
        });
    } else {
        addStyles();
        createUI();
    }

})();
