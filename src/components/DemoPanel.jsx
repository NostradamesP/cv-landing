import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Kanban, FileText, Monitor, Radio, Check, BadgeCheck,
  Search, Bell, Plus, ChevronDown, Circle, Loader2, Lock, CheckCircle2,
  Flame, Clock3, MessageSquare, Paperclip, Flag, Server, Tag,
  Landmark, Receipt, LayoutDashboard, Palette, Users, Store, Boxes, Wallet,
  ReceiptText, BarChart3, Settings, LifeBuoy, LogOut, Diamond,
  Globe, ShoppingBag, Music2, GraduationCap, ExternalLink,
} from 'lucide-react'

const tabs = [
  { id: 'kanban', label: 'Kanban IT', icon: Kanban, color: 'from-cyan-500 to-teal-400' },
  { id: 'facturd', label: 'FactuRD', icon: FileText, color: 'from-blue-500 to-indigo-400' },
  { id: 'web', label: 'Websites', icon: Globe, color: 'from-fuchsia-500 to-pink-400' },
  { id: 'signage', label: 'Digital Signage', icon: Monitor, color: 'from-cyan-500 to-sky-400' },
]

const STATUS_ORDER = ['Pendiente', 'En progreso', 'Bloqueado', 'Hecho']

const statusMeta = {
  Pendiente: { icon: Circle, tone: 'text-slate-600', accent: 'bg-slate-400' },
  'En progreso': { icon: Loader2, tone: 'text-blue-600', accent: 'bg-blue-500' },
  Bloqueado: { icon: Lock, tone: 'text-rose-600', accent: 'bg-rose-500' },
  Hecho: { icon: CheckCircle2, tone: 'text-emerald-600', accent: 'bg-emerald-500' },
}

const priorityMeta = {
  Alta: { icon: Flame, tone: 'text-red-600 bg-red-50 border-red-100' },
  Media: { icon: Flag, tone: 'text-amber-600 bg-amber-50 border-amber-100' },
  Baja: { icon: Circle, tone: 'text-slate-500 bg-slate-50 border-slate-100' },
}

const modColors = {
  Seguridad: 'bg-red-100 text-red-700',
  Infraestructura: 'bg-slate-100 text-slate-700',
  IA: 'bg-cyan-100 text-cyan-700',
  Reportes: 'bg-rose-100 text-rose-700',
  Auth: 'bg-blue-100 text-blue-700',
}

const avatarColors = ['bg-blue-600', 'bg-amber-500', 'bg-purple-500', 'bg-emerald-600']

const initialTasks = [
  { id: 'k1', col: 'Pendiente', title: 'Configurar FortiGate VPN site-to-site', system: 'FortiGate', module: 'Seguridad', priority: 'Alta', pts: 3, sla: 8, urgency: 'Crítica', due: 'Vence 06/08', dueTone: 'border-red-100 bg-red-50 text-red-600', assignee: 'ER' },
  { id: 'k2', col: 'Pendiente', title: 'Migración Active Directory a DC2', system: 'AD', module: 'Infraestructura', priority: 'Media', pts: 2, sla: 24, due: 'Vence 12/08', dueTone: 'border-amber-100 bg-amber-50 text-amber-700', comments: 3, assignee: 'JR' },
  { id: 'k3', col: 'Pendiente', title: 'Pipeline n8n de reportes automáticos', system: 'n8n', module: 'IA', priority: 'Baja', pts: 1, sla: 48 },
  { id: 'k4', col: 'En progreso', title: 'Desplegar dashboard SLA a producción', system: 'Dashboard', module: 'Reportes', priority: 'Alta', pts: 3, sla: 16, urgency: 'Alta', checklist: '2/4', comments: 5, attachments: 2, assignee: 'EV' },
  { id: 'k5', col: 'En progreso', title: 'Auditoría de roles RBAC (Usuarios)', system: 'Firebase', module: 'Auth', priority: 'Media', pts: 2, sla: 16, checklist: '1/3', comments: 1, assignee: 'AM' },
  { id: 'k6', col: 'Bloqueado', title: 'Certificados SSL del portal cliente', system: 'Signage', module: 'Seguridad', priority: 'Alta', pts: 3, urgency: 'Crítica', due: 'Vencido 02/08', dueTone: 'border-red-100 bg-red-50 text-red-600', blocked: true, assignee: 'ER' },
  { id: 'k7', col: 'Hecho', title: 'Generar reporte mensual de incidencias', system: 'ServiceDesk', module: 'Reportes', priority: 'Baja', pts: 1, checklist: '4/4', comments: 2, due: 'Entregado 30/07', dueTone: 'border-emerald-100 bg-emerald-50 text-emerald-700', assignee: 'JR' },
]

function badgeBase() {
  return 'inline-flex h-[22px] max-w-[132px] items-center gap-1 rounded-md border px-1.5 text-[10px] font-semibold leading-none'
}

function Avatar({ name, color }) {
  return (
    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${color} text-[9px] font-bold text-white`}>
      {name}
    </span>
  )
}

function TaskCard({ task, onAdvance }) {
  const { t } = useLanguage()
  const meta = priorityMeta[task.priority] || priorityMeta.Media
  const PriorityIcon = meta.icon

  return (
    <motion.button
      layout
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onAdvance(task.id)}
      title={t('demos.kanban.clickToMove')}
      className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-left shadow-sm transition-colors hover:border-cyan-300 hover:shadow-md"
    >
      <h3 className="flex items-start gap-1 text-xs font-bold leading-snug text-slate-950">
        <PriorityIcon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${meta.tone.split(' ')[0]}`} />
        <span className="line-clamp-2">{task.title}</span>
        {task.blocked && <Lock className="mt-0.5 h-3 w-3 shrink-0 text-red-500" />}
      </h3>

      <div className="mt-1.5 flex flex-wrap gap-1">
        <span className={`${badgeBase()} border-cyan-100 bg-cyan-50 text-cyan-700`}>
          <Server className="h-3 w-3 shrink-0" />
          <span className="truncate">{task.system}</span>
        </span>
        <span className={`${badgeBase()} ${modColors[task.module] || 'bg-slate-100 text-slate-600'} border-transparent`}>
          <Tag className="h-3 w-3 shrink-0" />
          {task.module}
        </span>
        <span className={`${badgeBase()} ${meta.tone}`}>
          <PriorityIcon className="h-3 w-3 shrink-0" />
          {task.priority}
        </span>
      </div>

      <div className="mt-1.5 flex flex-wrap items-center gap-1 border-t border-slate-100 pt-1.5">
        {task.urgency && (
          <span className={`${badgeBase()} border-amber-100 bg-amber-50 text-amber-700`}>
            <Flame className="h-3 w-3 shrink-0" />
            Urg. {task.urgency}
          </span>
        )}
        {task.sla && (
          <span className={`${badgeBase()} border-cyan-100 bg-cyan-50 text-cyan-700`}>
            <Clock3 className="h-3 w-3 shrink-0" />
            {task.sla}h SLA
          </span>
        )}
        {task.checklist && (
          <span className={`${badgeBase()} border-slate-200 bg-slate-50 text-slate-600`}>
            <CheckCircle2 className="h-3 w-3 shrink-0" />
            {task.checklist}
          </span>
        )}
        {task.comments > 0 && (
          <span className={`${badgeBase()} border-slate-200 bg-slate-50 text-slate-600`}>
            <MessageSquare className="h-3 w-3 shrink-0" />
            {task.comments}
          </span>
        )}
        {task.attachments > 0 && (
          <span className={`${badgeBase()} border-slate-200 bg-slate-50 text-slate-600`}>
            <Paperclip className="h-3 w-3 shrink-0" />
            {task.attachments}
          </span>
        )}
        {task.due && (
          <span className={`${badgeBase()} ${task.dueTone}`}>
            <Clock3 className="h-3 w-3 shrink-0" />
            {task.due}
          </span>
        )}
        {task.assignee ? (
          <span className="ml-auto">
            <Avatar name={task.assignee} color={avatarColors[0]} />
          </span>
        ) : (
          <span className="ml-auto" />
        )}
      </div>
    </motion.button>
  )
}

const columnProgress = { Pendiente: 0, 'En progreso': 55, Bloqueado: 15, Hecho: 100 }

function KanbanDemo() {
  const { t } = useLanguage()
  const [board, setBoard] = useState(STATUS_ORDER.map((s) => ({ status: s, tasks: initialTasks.filter((t) => t.col === s) })))

  const moveTask = (taskId) => {
    setBoard((prev) => {
      let fromIdx = -1
      let task = null
      const next = prev.map((col) => ({ ...col, tasks: [...col.tasks] }))
      next.forEach((col, i) => {
        const idx = col.tasks.findIndex((t) => t.id === taskId)
        if (idx !== -1) {
          fromIdx = i
          task = col.tasks.splice(idx, 1)[0]
        }
      })
      if (!task) return prev
      next[(fromIdx + 1) % next.length].tasks.push(task)
      return next
    })
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* App bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-sm">
            <Kanban size={15} />
          </span>
          <div>
            <p className="text-sm font-extrabold text-slate-800 leading-tight">NoraHR</p>
            <p className="text-[10px] text-slate-400 leading-tight">{t('demos.kanban.title')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value=""
              placeholder={t('demos.kanban.search')}
              readOnly
              className="w-44 rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs text-slate-500 outline-none"
            />
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100">
            <Bell size={15} />
          </button>
          <span className="hidden h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white sm:flex">
            ER
          </span>
        </div>
      </div>

      {/* Board */}
      <div className="overflow-x-auto bg-slate-50 p-3 sm:p-4">
        <div className="grid min-w-[880px] grid-cols-4 gap-3">
          {board.map((col) => {
            const meta = statusMeta[col.status]
            const StatusIcon = meta.icon
            const pts = col.tasks.reduce((a, t) => a + t.pts, 0)
            return (
              <div key={col.status} className="rounded-xl border border-slate-200/80 bg-slate-100/80 shadow-sm">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-2">
                    <ChevronDown size={14} className="text-slate-400" />
                    <StatusIcon className={`h-4 w-4 ${meta.tone}`} />
                    <h2 className="text-sm font-bold text-slate-800">{col.status}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-white px-2 py-0.5 text-xs font-bold text-slate-500 shadow-sm">
                      {col.tasks.length}
                    </span>
                    <span className="text-[10px] text-slate-400">{pts}pts</span>
                  </div>
                </div>
                <div className="px-3">
                  <div className="mb-1 flex justify-between text-[10px] text-slate-400">
                    <span>{t('demos.kanban.progress')}</span>
                    <span>{columnProgress[col.status]}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${meta.accent}`}
                      style={{ width: `${columnProgress[col.status]}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-1.5 p-1.5">
                  {col.tasks.map((t) => (
                    <TaskCard key={t.id} task={t} onAdvance={moveTask} />
                  ))}
                  {col.tasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                        <Plus size={18} className="text-slate-300" />
                      </div>
                      <p className="text-xs font-semibold text-slate-400">{t('demos.kanban.noTasks')}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <p className="flex items-center gap-1.5 border-t border-slate-200 bg-white px-4 py-2 text-[11px] text-slate-500">
        <Radio size={11} className="text-emerald-500" />
        {t('demos.kanban.demoHint')}
      </p>
    </div>
  )
}

/* ------------------------- FactuRD (Material 3) ------------------------- */

const facturdNav = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Facturas', icon: ReceiptText, active: true },
  { label: 'Diseño', icon: Palette },
  { label: 'Clientes', icon: Users },
  { label: 'Proveedores', icon: Store },
  { label: 'Inventario', icon: Boxes },
  { label: 'Cobros', icon: Wallet },
  { label: 'Gastos', icon: Receipt },
  { label: 'Reportes', icon: BarChart3 },
  { label: 'Empresa', icon: Settings },
]

const invoiceItems = [
  { desc: 'Módulo facturación electrónica e-CF', qty: 1, price: 45000 },
  { desc: 'Soporte técnico mensual', qty: 12, price: 3500 },
  { desc: 'Configuración DGII y firma digital', qty: 1, price: 8000 },
]

const fm = (n) => `RD$ ${n.toLocaleString('es-DO', { minimumFractionDigits: 2 })}`

function FacturdSidebar() {
  const { t } = useLanguage()
  return (
    <aside className="hidden w-52 shrink-0 flex-col border-r border-[#d5dfe6] bg-[#e8eff3] py-4 sm:flex">
      <div className="mb-5 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0056d2] text-white">
            <Landmark size={16} />
          </div>
          <div>
            <h1 className="text-lg font-extrabold leading-tight text-[#2a3439]">FactuRD</h1>
            <p className="text-[11px] font-medium text-[#5b6b74]">Premium ERP</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-y-0.5 px-3">
        {facturdNav.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              active
                ? 'bg-white text-[#2a3439] shadow-sm'
                : 'text-[#5b6b74] hover:bg-white/60 hover:text-[#2a3439]'
            }`}
          >
            <Icon size={16} className={active ? 'text-[#0056d2]' : ''} />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-y-0.5 px-3">
        <button className="flex items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium text-[#5b6b74] hover:bg-white/60 hover:text-[#2a3439]">
          <LifeBuoy size={16} />
          {t('demos.facturd.nav.support')}
        </button>
        <button className="flex items-center gap-3.5 rounded-lg px-4 py-2.5 text-sm font-medium text-[#5b6b74] hover:bg-white/60 hover:text-[#2a3439]">
          <LogOut size={16} />
          {t('demos.facturd.nav.logout')}
        </button>
        <div className="mt-2 rounded-xl border border-[#d5dfe6] bg-[#eef3f6] p-3">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold text-[#2a3439]">
            <Palette size={13} className="text-[#0056d2]" />
            {t('demos.facturd.nav.brandSettings')}
          </p>
          <div className="flex items-center gap-1.5">
            {['#0056d2', '#f7f9fb', '#e8eff3', '#2a3439'].map((c) => (
              <span key={c} className="h-5 w-5 rounded-md border border-black/10" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

function InvoiceClassic() {
  return (
    <div className="rounded-lg bg-white p-5 text-sm sm:p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0056d2] text-white">
            <Receipt size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Nora Software SRL</h3>
          <p className="text-xs text-gray-500">RNC: 130-12345-6</p>
          <p className="text-xs text-gray-500">Av. 27 de Febrero, Santo Domingo</p>
        </div>
        <div className="text-right">
          <span className="text-xs uppercase tracking-wider text-gray-400">Invoice</span>
          <p className="text-2xl font-bold text-gray-900">#INV-001</p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-8 border-b border-gray-200 pb-6">
        <div>
          <p className="mb-2 text-xs uppercase text-gray-400">Bill To</p>
          <p className="font-medium text-gray-900">Empresa DEMO SRL</p>
          <p className="text-xs text-gray-500">RNC: 131-987654-2</p>
          <p className="text-xs text-gray-500">Av. Winston Churchill, Santo Domingo</p>
          <p className="text-xs text-gray-500">ventas@empresademo.do</p>
        </div>
        <div className="text-right">
          <p className="mb-1 text-xs text-gray-400">Date: <span className="text-gray-700">04/08/2026</span></p>
          <p className="mb-1 text-xs text-gray-400">Due: <span className="text-gray-700">04/09/2026</span></p>
          <p className="text-xs text-gray-400">NCF: <span className="font-mono text-gray-700">E310000000001</span></p>
        </div>
      </div>

      <table className="mb-6 w-full">
        <thead>
          <tr className="border-b border-gray-200 text-xs uppercase text-gray-400">
            <th className="py-3 text-left">Description</th>
            <th className="py-3 text-center">Qty</th>
            <th className="py-3 text-right">Price</th>
            <th className="py-3 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item) => (
            <tr key={item.desc} className="border-b border-gray-100">
              <td className="py-3 text-gray-700">{item.desc}</td>
              <td className="py-3 text-center text-gray-700">{item.qty}</td>
              <td className="py-3 text-right text-gray-700">{fm(item.price)}</td>
              <td className="py-3 text-right font-medium text-gray-700">{fm(item.price * item.qty)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span>
            <span>{fm(95000)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>ITBIS (18%)</span>
            <span>{fm(17100)}</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 text-lg font-bold text-[#0056d2]">
            <span>Total</span>
            <span>{fm(112100)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvoiceModern() {
  return (
    <div className="rounded-lg bg-white p-5 text-sm sm:p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900">Nora Software SRL</h3>
          <p className="mt-1 text-xs text-gray-400">RNC: 130-12345-6 | Av. 27 de Febrero, Santo Domingo</p>
        </div>
        <div className="rounded-lg bg-gray-900 px-4 py-2 text-white">
          <p className="text-xs opacity-60">INVOICE</p>
          <p className="text-xl font-bold">#INV-001</p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-6">
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="mb-2 text-xs uppercase text-gray-400">From</p>
          <p className="font-medium text-gray-900">Nora Software SRL</p>
          <p className="text-xs text-gray-500">(809) 555-0199</p>
          <p className="text-xs text-gray-500">ventas@norahr.com</p>
        </div>
        <div className="rounded-lg bg-[#0056d2]/5 p-4">
          <p className="mb-2 text-xs uppercase text-[#0056d2]">Bill To</p>
          <p className="font-medium text-gray-900">Empresa DEMO SRL</p>
          <p className="text-xs text-gray-500">RNC: 131-987654-2</p>
          <p className="text-xs text-gray-500">Av. Winston Churchill, Santo Domingo</p>
          <p className="text-xs text-gray-500">ventas@empresademo.do</p>
        </div>
      </div>

      {invoiceItems.map((item) => (
        <div key={item.desc} className="flex items-center justify-between border-b border-gray-100 py-2">
          <div>
            <p className="font-medium text-gray-800">{item.desc}</p>
            <p className="text-xs text-gray-400">{item.qty} x {fm(item.price)}</p>
          </div>
          <p className="font-bold text-gray-900">{fm(item.price * item.qty)}</p>
        </div>
      ))}

      <div className="mt-6 flex justify-end">
        <div className="w-72 rounded-xl bg-gray-900 p-6 text-white">
          <div className="mb-2 flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span>{fm(95000)}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-400">Tax</span>
            <span>{fm(17100)}</span>
          </div>
          <div className="my-3 h-px bg-gray-700" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-[#0056d2]">{fm(112100)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvoiceBold() {
  return (
    <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-sm text-white sm:p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056d2]">
            <Diamond size={18} />
          </div>
          <h3 className="text-xl font-bold">Nora Software SRL</h3>
          <p className="text-xs text-gray-400">Av. 27 de Febrero, Santo Domingo</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0056d2]">Invoice</span>
          <p className="text-3xl font-bold">#INV-001</p>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-6 border-b border-gray-700 pb-6">
        <div>
          <p className="mb-2 text-xs uppercase text-gray-400">Client</p>
          <p className="text-lg font-bold">Empresa DEMO SRL</p>
          <p className="text-xs text-gray-400">RNC: 131-987654-2</p>
          <p className="text-xs text-gray-400">ventas@empresademo.do</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Date: <span className="text-white">04/08/2026</span></p>
          <p className="text-xs text-gray-400">Due: <span className="text-white">04/09/2026</span></p>
          <p className="text-xs text-gray-400">NCF: <span className="font-mono text-white">E310000000001</span></p>
        </div>
      </div>

      <div className="mb-6 space-y-4">
        {invoiceItems.map((item) => (
          <div key={item.desc} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{item.desc}</p>
              <p className="text-xs text-gray-400">{item.qty} units</p>
            </div>
            <p className="text-lg font-bold">{fm(item.price * item.qty)}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white/10 p-6">
        <div className="mb-2 flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span>{fm(95000)}</span>
        </div>
        <div className="mb-2 flex justify-between text-gray-300">
          <span>Tax (18%)</span>
          <span>{fm(17100)}</span>
        </div>
        <div className="my-3 h-px bg-white/20" />
        <div className="flex justify-between text-2xl font-bold">
          <span className="text-[#0056d2]">Total</span>
          <span className="text-[#0056d2]">{fm(112100)}</span>
        </div>
      </div>
    </div>
  )
}

const templates = [
  { id: 'classic', name: 'Classic' },
  { id: 'modern', name: 'Modern' },
  { id: 'bold', name: 'Bold' },
]

function FacturdDemo() {
  const { t } = useLanguage()
  const [template, setTemplate] = useState('classic')
  const [generated, setGenerated] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <div className="flex min-h-[560px] bg-[#f7f9fb]">
        <FacturdSidebar />

        <div className="flex-1 p-4 sm:p-6">
          {/* Page header */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-[#2a3439]">{t('demos.facturd.form.newInvoice')}</h2>
              <p className="text-xs text-[#5b6b74]">{t('demos.facturd.form.subtitle')}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-[#d5dfe6] bg-white px-3.5 py-2 text-xs font-bold text-[#2a3439] shadow-sm">
                {t('demos.facturd.form.saveDraft')}
              </button>
              <button className="rounded-lg bg-[#0056d2] px-3.5 py-2 text-xs font-bold text-white shadow-sm">
                {t('demos.facturd.form.saveAndIssue')}
              </button>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
            {/* Invoice preview with template switcher */}
            <div>
              <div className="mb-3 flex gap-2">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTemplate(t.id)}
                    className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                      template === t.id
                        ? 'bg-[#0056d2] text-white shadow-sm'
                        : 'bg-[#e8eff3] text-[#5b6b74] hover:bg-[#dce5ec]'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={template}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-lg shadow-sm ring-1 ring-slate-200"
                >
                  {template === 'classic' && <InvoiceClassic />}
                  {template === 'modern' && <InvoiceModern />}
                  {template === 'bold' && <InvoiceBold />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right rail */}
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="mb-1 flex items-center gap-2 text-sm font-bold text-[#2a3439]">
                  <BadgeCheck size={15} className="text-[#0056d2]" />
                  {t('demos.facturd.ecf.title')}
                </p>
                <p className="mb-3 text-[11.5px] leading-relaxed text-slate-500">
                  {t('demos.facturd.ecf.description')}
                </p>
                <button
                  onClick={() => setGenerated(true)}
                  className={`w-full rounded-lg px-3 py-2.5 text-xs font-bold transition-all duration-300 ${
                    generated
                      ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200'
                      : 'bg-[#0056d2] text-white shadow-sm hover:bg-[#0046ad]'
                  }`}
                >
                  {generated ? t('demos.facturd.ecf.generated') : t('demos.facturd.ecf.generate')}
                </button>
                <AnimatePresence>
                  {generated && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 rounded-lg bg-emerald-50 p-3 ring-1 ring-emerald-200"
                    >
                      <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                        <Check size={13} />
                        {t('demos.facturd.ecf.approved')}
                      </p>
                      <p className="font-mono text-[10.5px] text-emerald-700/80">
                        E310000000001 · Timbrado: 12:41:03
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-[#2a3439]">
                  <Boxes size={15} className="text-[#0056d2]" />
                  {t('demos.facturd.kardex.title')}
                </p>
                <div className="space-y-2.5">
                  {[
                    ['Laptop Dell Latitude', '24 disp.', 78],
                    ['Monitor 24"', '12 disp.', 55],
                    ['Switch 24 puertos', '6 disp.', 32],
                  ].map(([name, stock, pct]) => (
                    <div key={name}>
                      <div className="mb-1 flex justify-between text-[11px]">
                        <span className="font-medium text-slate-600">{name}</span>
                        <span className="font-semibold text-[#0056d2]">{stock}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[#e8eff3]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#0056d2] to-[#4d8df0]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------- Digital Signage (live) ------------------------- */

const signageSite = {
  name: 'Nora Signage Portal',
  url: 'https://nostradamesp.github.io/nora-signage-portal/',
}

function SignageDemo() {
  const { t } = useLanguage()
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="ml-1.5 flex-1 truncate rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] text-slate-500">
            {signageSite.url}
          </div>
          <a
            href={signageSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold text-slate-600 transition-colors hover:text-accent"
          >
            <ExternalLink size={10} />
            {t('demos.websites.open')}
          </a>
        </div>
        <div className="relative h-[560px] bg-slate-50">
          {!loaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-50">
              <Loader2 size={26} className="animate-spin text-accent" />
              <p className="text-xs font-semibold text-slate-400">{t('demos.signage.loading')}</p>
            </div>
          )}
          <iframe
            src={signageSite.url}
            title={signageSite.name}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            allow="fullscreen; autoplay"
            className="h-full w-full border-0"
          />
        </div>
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
        <Radio size={11} className="text-emerald-400" />
        {signageSite.name} — {t('demos.signage.description')}
      </p>
    </div>
  )
}

/* ------------------------- Websites ------------------------- */

/* ------------------------- Websites (live demos) ------------------------- */

const liveSites = [
  {
    id: 'eventpro',
    name: 'Event Pro Jinaite',
    url: 'https://eventpro.com.do',
    embeddable: false,
    icon: Monitor,
    tone: 'from-rose-500 to-pink-500',
    services: ['Pantallas LED', 'Sonido', 'Iluminación', 'CCTV'],
  },
  {
    id: 'facturd',
    name: 'FactuRD',
    url: 'https://nostradamesp.github.io/facturd-landing/',
    embeddable: true,
    icon: FileText,
    tone: 'from-blue-500 to-indigo-400',
  },
  {
    id: 'xtrogeno',
    name: 'Tienda Xtrógeno',
    url: 'https://nostradamesp.github.io/tiendaxtrogeno-web/',
    embeddable: true,
    icon: ShoppingBag,
    tone: 'from-pink-500 to-purple-500',
  },
  {
    id: 'solo',
    name: 'Solo el Music',
    url: 'https://nostradamesp.github.io/solo-el-music/',
    embeddable: true,
    icon: Music2,
    tone: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'sharks',
    name: 'Sharks Launch Pad',
    url: 'https://nostradamesp.github.io/sharks-launchpad/',
    embeddable: true,
    icon: GraduationCap,
    tone: 'from-orange-500 to-rose-500',
  },
  {
    id: 'signage',
    name: 'Nora Signage Portal',
    url: 'https://nostradamesp.github.io/nora-signage-portal/',
    embeddable: true,
    icon: Radio,
    tone: 'from-teal-500 to-cyan-500',
  },
]

function WebsiteFallback({ site }) {
  const { t } = useLanguage()
  return (
    <div className="flex h-[560px] flex-col items-center justify-center bg-gradient-to-br from-[#1b0f1f] via-[#221028] to-[#15091a] px-6 text-center">
      <span className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${site.tone} text-white shadow-lg shadow-black/30`}>
        <site.icon size={24} />
      </span>
      <h4 className="text-lg font-extrabold text-white">Event Pro Jinaite</h4>
      <p className="mt-1 font-mono text-xs text-slate-400">eventpro.com.do</p>
      <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-300">
        {t('demos.websites.fallback.title')} {t('demos.websites.fallback.description')}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {site.services.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-200">
            {s}
          </span>
        ))}
      </div>
      <a
        href="https://eventpro.com.do"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${site.tone} px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition-transform hover:scale-[1.02]`}
      >
        {t('demos.websites.fallback.openButton')}
        <ExternalLink size={13} />
      </a>
    </div>
  )
}

function WebsitesDemo() {
  const { t } = useLanguage()
  const [site, setSite] = useState(liveSites[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [site.id])

  return (
    <div>
      {/* Demo selection by site name */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {liveSites.map((s) => (
          <button
            key={s.id}
            onClick={() => setSite(s)}
            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-bold transition-all ${
              site.id === s.id
                ? `border-transparent bg-gradient-to-r ${s.tone} text-white shadow-md`
                : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className={`flex h-4 w-4 items-center justify-center rounded ${site.id === s.id ? 'bg-white/25 text-white' : 'bg-white/10 text-slate-400'}`}>
              <s.icon size={9} />
            </span>
            {s.name}
          </button>
        ))}
      </div>

      {/* Live browser */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="ml-1.5 flex-1 truncate rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] text-slate-500">
            {site.url}
          </div>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold text-slate-600 transition-colors hover:text-accent"
          >
            <ExternalLink size={10} />
            {t('demos.websites.open')}
          </a>
        </div>

        {site.embeddable ? (
          <div className="relative h-[560px] bg-slate-50">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-50">
                <Loader2 size={26} className="animate-spin text-accent" />
                <p className="text-xs font-semibold text-slate-400">{t('demos.websites.loading', { name: site.name })}</p>
              </div>
            )}
            <iframe
              src={site.url}
              title={site.name}
              onLoad={() => setLoaded(true)}
              loading="lazy"
              allow="fullscreen; autoplay; camera; microphone"
              className="h-full w-full border-0"
            />
          </div>
        ) : (
          <WebsiteFallback site={site} />
        )}
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
        <Radio size={11} className="text-emerald-400" />
        {t('demos.websites.demoHint')}
      </p>
    </div>
  )
}


export default function DemoPanel() {
  const { t } = useLanguage()
  const [active, setActive] = useState('kanban')
  const activeTab = tabs.find((t) => t.id === active)

  return (
    <section id="demos" className="section-padding relative overflow-hidden">
      {/* Dark backdrop continuing from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b33] to-[#0f1f3d]" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            {t('demos.sectionBadge')}
          </motion.span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {t('demos.sectionHeading').replace('{highlight}', '')}<span className="gradient-text">{t('demos.sectionHighlight')}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Sistemas reales en producción — mueve tarjetas en el kanban, genera un e-CF o navega
            los sitios desplegados desde su propio dominio.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-blue-400" />
        </motion.div>

        {/* Panel with glow */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-800/90 shadow-2xl backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-navy-950/80 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">
                {activeTab.id === 'kanban' && 'app.norahr.com/board'}
                {activeTab.id === 'facturd' && 'app.facturd.com/invoices/new'}
                {activeTab.id === 'web' && 'sitios desarrollados · landings & e-commerce'}
                {activeTab.id === 'signage' && 'nostradamesp.github.io/nora-signage-portal/'}
              </div>
              <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>

            {/* Tabs */}
            <div className="flex gap-1.5 overflow-x-auto px-4 pt-3">
              {tabs.map(({ id, label, icon: Icon, color }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-t-xl border border-b-0 px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                    active === id
                      ? 'border-white bg-white text-slate-900'
                      : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className={`flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br ${color} text-white`}>
                    <Icon size={11} />
                  </span>
                  {label}
                </button>
              ))}
            </div>

            {/* Panel content */}
            <div className="border-t border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {active === 'kanban' && <KanbanDemo />}
                  {active === 'facturd' && <FacturdDemo />}
                  {active === 'web' && <WebsitesDemo />}
                  {active === 'signage' && <SignageDemo />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400"
        >
          <span className="flex items-center gap-1.5">
            <Radio size={11} className="text-emerald-400" />
            Demos interactivas de los sistemas en producción
          </span>
          <span className="hidden text-slate-500 sm:inline">·</span>
          <span>NoraHR Kanban · FactuRD · Websites · Digital Signage</span>
        </motion.div>
      </div>
    </section>
  )
}
